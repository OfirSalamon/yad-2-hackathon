import { Row } from "@/styles/container/container.styles";
import { Text } from "@/styles/typography/typography.styles";
import { IDetails } from "@/types";
import getAiDetails from "@/utils/api/get-ai-details/get-ai-details";
import AiPopup from "@components/ai-popup/ai-popup.component";
import DimensionsInputs from "@components/dimensions-inputs/dimensions-inputs.component";
import Dropdown from "@components/drop-down/drop-down.component";
import ImagePreview from "@components/image-preview/image-preview.component";
import PriceOptions from "@components/price-options/price-options.component";
import ProductPage from "@components/product-page/product-page.component";
import RadioButtons from "@components/radio-buttons/radio-buttons.component";
import UploadImage from "@components/upload-image/upload-image.component";
import Head from "next/head";
import { ChangeEvent, FormEvent, useState } from "react";
import {
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  SwitchTextContainer,
  Textarea,
  Title,
} from "./upload-item.style";

interface Measurement {
  value: number | null;
  label: string;
}

interface MeasurementValues {
  length: Measurement;
  width: Measurement;
  height: Measurement;
}

const IMAGE_URL = "https://vdivani.co.il/wp-content/uploads/2020/11/ELOIZ.jpg";
const fields = [
  {
    name: "image",
    label: "העלה תמונה",
    type: "file",
    initialValue: null,
  },
  { name: "title", label: "שם המוצר", type: "text", initialValue: "" },
  { name: "genre", label: "סוג המוצר", type: "select", initialValue: "" },
  { name: "color", label: "צבע", type: "select", initialValue: "" },
  { name: "material", label: "סוג בד", type: "select", initialValue: "" },
  { name: "manufacturer", label: "יצרן", type: "select", initialValue: "" },
  { name: "style", label: "סגנון", type: "select", initialValue: "" },
  {
    name: "dimensions",
    label: "מידות",
    type: "dimensions",
    initialValue: {
      length: { value: 10, label: "אורך" },
      depth: { value: 10, label: "רוחב" },
      height: { value: 10, label: "גובה" },
    },
  },
  { name: "description", label: "תיאור", type: "textarea", initialValue: "" },
  {
    name: "price",
    type: "number",
    initialValue: "",
    label: "מחיר",
    priceOption: {
      name: "priceOption",
      type: "radio",
      options: [
        { value: "cheap", label: "זול", price: "20" },
        { value: "market_price", label: "מחיר שוק", price: "30" },
        { value: "expensive", label: "יקר", price: "50" },
        { value: "other", label: "אחר" },
      ],
      initialValue: "",
    },
  },
  {
    name: "condition",
    label: "מצב המוצר",
    type: "radio",
    options: [
      { value: "חדש באריזה" },
      { value: "כמו חדש" },
      { value: "משומש" },
      { value: "נדרש תיקון" },
      { value: "לא רלוונטי" },
    ],
    initialValue: "",
  },
  {
    name: "address",
    label: "מיקום איסוף",
    type: "text",
    initialValue: "",
  },
];

const initialFormState = fields.reduce((acc, field) => {
  acc[field.name] = field.initialValue;
  return acc;
}, {} as Record<string, any>);

interface Props {
  options: IDetails;
}

const UploadItem = ({ options }: Props) => {
  const [form, setForm] = useState(initialFormState);
  const [prices, setPrices] = useState({
    below_market_price: "",
    above_market_price: "",
    market_price: "",
  });
  const [showProductPage, setShowProductPage] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const [loading, setLoading] = useState(false);
  const [aiDescription, setAiDescription] = useState(false);
  console.log({ form });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleDimensionChange = (
    e: ChangeEvent<HTMLInputElement>,
    dimensionName: string,
    key: string
  ) => {
    const { value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [dimensionName]: {
        ...prevForm[dimensionName],
        [key]: {
          ...prevForm[dimensionName][key],
          value: value,
        },
      },
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0];
    if (file) {
      setForm({
        ...form,
        image: file,
      });
    }
  };

  const handleDeleteFile = () => {
    setForm({
      ...form,
      image: null,
    });
  };

  const handleUseMyLocation = () => {
    setForm({
      ...form,
      address: "ריבל 7, תל אביב",
    });
  };

  const handlePriceOptionChange = (price?: string) =>
    setForm({
      ...form,
      price: price || "",
    });

  const handleSubmit = (e: FormEvent) => {
    setShowProductPage(true);
    e.preventDefault();
  };

  const onPopupButtonClick = () => getFormAiDetails();

  const isObject = (value: any): value is object =>
    value !== null && typeof value === "object";

  const areDimensionsValid = (dimensions: MeasurementValues): boolean => {
    return Object.values(dimensions).every(
      (dimension) => dimension.value !== null
    );
  };

  const imageField = form["image"];

  const getFormAiDetails = async () => {
    setLoading(true);
    getAiDetails({ url: IMAGE_URL, description: form.description })
      .then((data) => {
        const {
          above_market_price,
          below_market_price,
          market_price,
          height,
          length,
          depth,
          description,
        } = data;
        setPrices({
          below_market_price,
          above_market_price,
          market_price,
        });
        description && setAiDescription(true);
        setForm({
          ...form,
          title: data.title,
          genre: data.type,
          color: data.color,
          material: data.material,
          manufacturer: data.manufacturer,
          style: data.style,
          suggestion: description,
          condition: data.condition,
          dimensions: {
            height: { ...form.dimensions.height, value: height },
            length: { ...form.dimensions.length, value: length },
            depth: { ...form.dimensions.depth, value: depth },
          },
        });
      })
      .then(() => setShowPopup(false));
  };

  const renderOptions: any = {
    ["genre"]: options.product_types,
    ["color"]: options.colors,
    ["material"]: options.materials,
    ["manufacturer"]: options.manufacturers,
    ["style"]: options.styles,
  };

  const getFormGroupContent = (field: any) => {
    if (field.type === "file") {
      return form.image ? (
        <ImagePreview handleDeleteFile={handleDeleteFile} image={form.image} />
      ) : (
        <Row $aic $jcc>
          <UploadImage
            handleFileChange={handleFileChange}
            label={field.label}
            name={field.name}
          />
        </Row>
      );
    } else if (
      field.type === "dimensions" &&
      isObject(field.initialValue) &&
      areDimensionsValid(field.initialValue)
    ) {
      return (
        <>
          <Label>{field.label}</Label>
          <DimensionsInputs
            dimensions={field.initialValue}
            form={form}
            handleInputChange={handleDimensionChange}
            name={field.name}
          />
        </>
      );
    } else if (field.type === "select") {
      return (
        <>
          {field.label && <Label htmlFor={field.name}>{field.label}</Label>}
          <Dropdown
            selectedOption={form[field.name]}
            options={renderOptions[field.name]}
            onSelect={() => {}}
          />
        </>
      );
    } else if (field.priceOption) {
      return (
        <>
          <Label>{field.label}</Label>
          <PriceOptions
            priceOptions={field?.priceOption}
            currPrice={form.price}
            handleInputChange={handleInputChange}
            handlePriceOptionChange={handlePriceOptionChange}
            name={field.name}
            value={form[field.name as keyof typeof form]}
            above_market_price={+prices.above_market_price}
            below_market_price={+prices.below_market_price}
            market_price={+prices.market_price}
          />
        </>
      );
    } else if (field.type === "radio") {
      return (
        <>
          <Label>{field.label}</Label>
          <RadioButtons
            handleInputChange={handleInputChange}
            name={field.name}
            options={field?.options}
            value={form[field.name]}
          />
        </>
      );
    } else if (field.type !== "dimensions") {
      const isTextArea = field.type === "textarea";
      const descriptionValue = aiDescription
        ? form.suggestion
        : form.description;

      const replaceText = aiDescription
        ? "החלף לתיאור שלי"
        : "החלף לתיאור המוצע";
      return (
        <>
          {field.label && <Label htmlFor={field.name}>{field.label}</Label>}
          {isTextArea ? (
            <>
              <Textarea
                name={field.name}
                id={field.name}
                value={descriptionValue}
                onChange={handleInputChange}
                height={"150px"}
              />
              {form.description && (
                <SwitchTextContainer>
                  <Text
                    onClick={() => setAiDescription((prev) => !prev)}
                    s={20}
                    mb={16}
                    c={"brand"}
                  >
                    {replaceText}
                  </Text>
                </SwitchTextContainer>
              )}
            </>
          ) : (
            <>
              <Input
                type={field.type}
                name={field.name}
                id={field.name}
                value={form[field.name as keyof typeof form] as string}
                onChange={handleInputChange}
              />
              {field.name === "address" && (
                <Button type="button" onClick={handleUseMyLocation}>
                  השתמש במיקום שלי
                </Button>
              )}
            </>
          )}
        </>
      );
    }
  };

  return (
    <Container>
      {showProductPage ? (
        <ProductPage form={form}></ProductPage>
      ) : (
        <>
          <Head>
            <title>העלאת מוצר</title>
          </Head>
          <Title>מה מוכרים?</Title>
          <Form onSubmit={handleSubmit}>
            {fields.map(
              (field) =>
                (field.type === "file" ||
                  (form[field.name as keyof typeof form] !== null &&
                    form[field.name as keyof typeof form] !== undefined)) && (
                  <FormGroup key={field.name}>
                    {getFormGroupContent(field)}
                  </FormGroup>
                )
            )}
            <Button onClick={() => {}} type="submit">
              פרסם מוצר
            </Button>
          </Form>
          {showPopup && (
            <AiPopup
              loading={loading}
              handleFileChange={handleFileChange}
              imageName={"image"}
              label={"העלה תמונה"}
              image={imageField}
              handleDeleteFile={handleDeleteFile}
              descriptionName={"description"}
              descriptionValue={form["description"]}
              handleInputChange={handleInputChange}
              onButtonClick={onPopupButtonClick}
            />
          )}
        </>
      )}
    </Container>
  );
};

export default UploadItem;
