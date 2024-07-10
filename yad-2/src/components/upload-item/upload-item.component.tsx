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
  { name: "price", label: "מחיר", type: "number", initialValue: "" },
  {
    name: "category",
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
    if (e.target.files) {
      setForm({
        ...form,
        images: Array.from(e.target.files),
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
            {field.type === "file" ? (
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
                <Label htmlFor={field.name}>{field.label}</Label>
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
        <Button type="submit">העלה</Button>
      </Form>
    </Container>
  );
};

export default UploadItem;
