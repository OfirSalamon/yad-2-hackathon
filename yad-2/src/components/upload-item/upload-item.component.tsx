import { IDetails } from "@/types";
import getAiDetails from "@/utils/api/get-ai-details/get-ai-details";
import AiPopup from "@components/ai-popup/ai-popup.component";
import DimensionsInputs from "@components/dimensions-inputs/dimensions-inputs.component";
import Dropdown from "@components/drop-down/drop-down.component";
import ImagePreview from "@components/image-preview/image-preview.component";
import PriceOptions from "@components/price-options/price-options.component";
import RadioButtons from "@components/radio-buttons/radio-buttons.component";
import UploadImage from "@components/upload-image/upload-image.component";
import Head from "next/head";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
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
    label: "לחץ להעלות תמונה של המוצר",
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
      width: { value: 10, label: "רוחב" },
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
      { value: "new", label: "חדש באריזה" },
      { value: "like_new", label: "כמו חדש" },
      { value: "used", label: "משומש" },
      { value: "need_fix", label: "נדרש תיקון" },
      { value: "irrelevante", label: "לא רלוונטי" },
    ],
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
  const [showPopup, setShowPopup] = useState(false);
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

  const handlePriceOptionChange = (optionValue: string, price?: string) => {
    if (optionValue === "other") {
      setForm({
        ...form,
        price: "",
        priceOption: optionValue,
      });
    } else {
      setForm({
        ...form,
        price: price || "",
        priceOption: optionValue,
      });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(form);
  };

  const isObject = (value: any): value is object =>
    value !== null && typeof value === "object";

  const areDimensionsValid = (dimensions: MeasurementValues): boolean => {
    return Object.values(dimensions).every(
      (dimension) => dimension.value !== null
    );
  };

  const imageField = form["image"];

  const getFormAiDetails = async () => {
    getAiDetails({ url: IMAGE_URL }).then((data) => {
      setForm({
        ...form,
        title: data.title,
        genre: data.type,
        color: data.color,
        material: data.material,
        manufacturer: data.manufacturer,
        style: data.style,
        description: data.description,
        condition: data.condition,
      });
    });
  };

  useEffect(() => {
    if (!form.image) return;
    getFormAiDetails();
  }, [form.image]);

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
        <UploadImage
          handleFileChange={handleFileChange}
          label={field.label}
          name={field.name}
        />
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
            currPrice={form[field.priceOption.name]}
            handleInputChange={handleInputChange}
            handlePriceOptionChange={handlePriceOptionChange}
            name={field.name}
            value={form[field.name as keyof typeof form]}
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
      return (
        <>
          {field.label && <Label htmlFor={field.name}>{field.label}</Label>}
          {field.type === "textarea" ? (
            <Textarea
              name={field.name}
              id={field.name}
              value={form[field.name as keyof typeof form] as string}
              onChange={handleInputChange}
            />
          ) : (
            <Input
              type={field.type}
              name={field.name}
              id={field.name}
              value={form[field.name as keyof typeof form] as string}
              onChange={handleInputChange}
            />
          )}
        </>
      );
    }
  };

  return (
    <Container>
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
        <Button type="submit">פרסם מוצר</Button>
      </Form>
      {showPopup && (
        <AiPopup
          handleFileChange={handleFileChange}
          imageName={"image"}
          label={"לחץ להעלות תמונה של המוצר"}
          image={imageField}
          handleDeleteFile={handleDeleteFile}
          descriptionName={"description"}
          descriptionValue={form["description"]}
          handleInputChange={handleInputChange}
        />
      )}
    </Container>
  );
};

export default UploadItem;
