import React, { ChangeEvent, FormEvent, useState } from "react";
import {
  Button,
  Container,
  FileInput,
  FileInputLabel,
  Form,
  FormGroup,
  Input,
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
  {
    name: "images",
    label: "לחץ להעלות תמונה של המוצר",
    type: "file",
    initialValue: [] as File[],
  },
  { name: "genre", label: "סוג המוצר", type: "text", initialValue: "" },
  { name: "description", label: "תיאור", type: "textarea", initialValue: "" },
  {
    name: "priceOption",
    label: "מחיר",
    type: "radio",
    options: [
      { value: "cheap", label: "זול", price: "20" },
      { value: "market_price", label: "מחיר שוק", price: "30" },
      { value: "expensive", label: "יקר", price: "50" },
      { value: "other", label: "אחר" }, // New option
    ],
    initialValue: "",
  },
  {
    name: "price",
    type: "number",
    initialValue: "",
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
  if (field.name !== "priceOption") {
    acc[field.name] = field.initialValue;
  }
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
    if (e.target.files) {
      setForm({
        ...form,
        images: Array.from(e.target.files),
      });
    }
  };

  const handlePriceOptionChange = (optionValue: string, price?: string) => {
    if (optionValue === "other") {
      setForm({
        ...form,
        price: "",
      });
    } else {
      setForm({
        ...form,
        price: price || "",
      });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(form);
  };

  return (
    <Container>
      <Head>
        <title>העלאת מוצר</title>
      </Head>
      <Title>מה תרצו למכור?</Title>
      <Form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <FormGroup key={field.name}>
            {field.type === "file" && (
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
            )}
            {field.type === "radio" && field.name === "priceOption" && (
              <>
                <Label>{field.label}</Label>
                <PriceRadioButtonLabelContainer>
                  {field?.options?.map((option) => (
                    <React.Fragment key={option.value}>
                      <PriceRadioInput
                        type="radio"
                        name={field.name}
                        id={`${field.name}-${option.value}`}
                        value={option.value}
                        checked={form[field.name] === option.value}
                        onChange={() =>
                          handlePriceOptionChange(
                            option.value,
                            option.price || ""
                          )
                        }
                      />
                      <PriceRadioButtonLabel
                        htmlFor={`${field.name}-${option.value}`}
                      >
                        {option.label}
                        {option.price && <span> - {option.price}$</span>}
                      </PriceRadioButtonLabel>
                    </React.Fragment>
                  ))}
                </PriceRadioButtonLabelContainer>
              </>
            )}
            {field.type === "radio" && field.name !== "priceOption" && (
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
            )}
            {!field.type.includes("radio") && field.type !== "file" && (
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
        ))}
        <Button type="submit">פרסם מוצר</Button>
      </Form>
    </Container>
  );
};

export default UploadItem;
