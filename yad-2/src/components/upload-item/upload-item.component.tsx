import React, { ChangeEvent, FormEvent, useState } from "react";
import {
  Button,
  Container,
  DimensionContainer,
  DimensionInput,
  DimensionLabel,
  FileInput,
  FileInputLabel,
  Form,
  FormGroup,
  Input,
  ItemImage,
  ItemImageContainer,
  Label,
  PriceRadioButtonLabel,
  PriceRadioButtonLabelContainer,
  PriceRadioInput,
  RadioButtonLabel,
  RadioButtonsContainer,
  RadioInput,
  Textarea,
  Title,
} from "./upload-item.style";
import Head from "next/head";

const fields = [
  { name: "title", label: "שם המוצר", type: "text", initialValue: "" },
  {
    name: "image",
    label: "לחץ להעלות תמונה של המוצר",
    type: "file",
    initialValue: null,
  },
  { name: "genre", label: "סוג המוצר", type: "text", initialValue: "" },
  { name: "color", label: "צבע", type: "text", initialValue: null },
  { name: "material", label: "בד", type: "text", initialValue: null },
  { name: "style", label: "סגנון", type: "text", initialValue: null },
  {
    name: "dimensions",
    label: "מידות",
    type: "dimensions",
    initialValue: {
      length: { value: null, label: "אורך" },
      width: { value: null, label: "רוחב" },
      height: { value: null, label: "גובה" },
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

const UploadItem = () => {
  const [form, setForm] = useState(initialFormState);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target?.files?.[0]) {
      setForm({
        ...form,
        image: e.target.files[0],
      });
    }
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

  return (
    <Container>
      <Head>
        <title>העלאת מוצר</title>
      </Head>
      <Title>מה תרצו למכור?</Title>
      <Form onSubmit={handleSubmit}>
        {fields.map(
          (field) =>
            (field.type === "file" ||
              (form[field.name as keyof typeof form] !== null &&
                form[field.name as keyof typeof form] !== undefined)) && (
              <FormGroup key={field.name}>
                {field.type === "file" ? (
                  form.image ? (
                    <ItemImageContainer>
                      <ItemImage
                        src={URL.createObjectURL(form.image)}
                        alt="Uploaded Product"
                        width={0}
                        height={0}
                      />
                    </ItemImageContainer>
                  ) : (
                    <>
                      <FileInputLabel htmlFor={field.name}>
                        {field.label}
                      </FileInputLabel>
                      <FileInput
                        type={field.type}
                        name={field.name}
                        id={field.name}
                        multiple
                        onChange={handleFileChange}
                      />
                    </>
                  )
                ) : field.type === "dimensions" &&
                  isObject(field.initialValue) ? (
                  <>
                    <Label>{field.label}</Label>
                    <DimensionContainer>
                      {Object.keys(field.initialValue).map((key) => (
                        <div key={key}>
                          <DimensionLabel>
                            {(field.initialValue as any)[key].label}
                          </DimensionLabel>
                          <DimensionInput
                            type="number"
                            name={`${field.name}.${key}.value`}
                            id={`${field.name}.${key}.value`}
                            value={
                              form[field.name as keyof typeof form][key]
                                ?.value || ""
                            }
                            onChange={handleInputChange}
                          />
                        </div>
                      ))}
                    </DimensionContainer>
                  </>
                ) : field.priceOption ? (
                  <>
                    <Label>{field.label}</Label>
                    <PriceRadioButtonLabelContainer>
                      {field?.priceOption.options?.map((option) => (
                        <React.Fragment key={option.value}>
                          <PriceRadioInput
                            type="radio"
                            name={field.priceOption.name}
                            id={`${field.priceOption.name}-${option.value}`}
                            value={option.value}
                            checked={
                              form[field.priceOption.name] === option.value
                            }
                            onChange={() =>
                              handlePriceOptionChange(
                                option.value,
                                option.price || ""
                              )
                            }
                          />
                          <PriceRadioButtonLabel
                            htmlFor={`${field.priceOption.name}-${option.value}`}
                          >
                            {option.label}
                            {option.price && `\n(₪${option.price})`}
                          </PriceRadioButtonLabel>
                        </React.Fragment>
                      ))}
                    </PriceRadioButtonLabelContainer>
                    <Input
                      type={field.type}
                      name={field.name}
                      id={field.name}
                      value={form[field.name as keyof typeof form] as string}
                      onChange={handleInputChange}
                    />
                  </>
                ) : field.type === "radio" ? (
                  <>
                    <Label>{field.label}</Label>
                    <RadioButtonsContainer>
                      {field?.options?.map((option) => (
                        <React.Fragment key={option.value}>
                          <RadioInput
                            type="radio"
                            name={field.name}
                            id={`${field.name}-${option.value}`}
                            value={option.value}
                            checked={form[field.name] === option.value}
                            onChange={handleInputChange}
                          />
                          <RadioButtonLabel
                            htmlFor={`${field.name}-${option.value}`}
                            checked={form[field.name] === option.value}
                          >
                            {option.label}
                          </RadioButtonLabel>
                        </React.Fragment>
                      ))}
                    </RadioButtonsContainer>
                  </>
                ) : (
                  <>
                    {field.label && (
                      <Label htmlFor={field.name}>{field.label}</Label>
                    )}
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
                )}
              </FormGroup>
            )
        )}
        <Button type="submit">פרסם מוצר</Button>
      </Form>
    </Container>
  );
};

export default UploadItem;
