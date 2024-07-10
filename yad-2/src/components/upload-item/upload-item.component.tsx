import { ChangeEvent, FormEvent, useState } from "react";
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
import Head from "next/head";

const UploadItem = () => {
  const [form, setForm] = useState({
    images: [] as File[],
    genre: "",
    description: "",
    price: "",
    location: "",
  });

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
        <title>Marketplace</title>
      </Head>
      <Title>מה תרצו למכור?</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="images">תמונות של המוצר</Label>
          <Input
            type="file"
            name="images"
            id="images"
            multiple
            onChange={handleFileChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="genre">סוג המוצר</Label>
          <Input
            type="text"
            name="genre"
            id="genre"
            value={form.genre}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="description">תיאור</Label>
          <Textarea
            name="description"
            id="description"
            value={form.description}
            onChange={handleInputChange}
          ></Textarea>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="price">מחיר</Label>
          <Input
            type="number"
            name="price"
            id="price"
            value={form.price}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="location">מיקום</Label>
          <Input
            type="text"
            name="location"
            id="location"
            value={form.location}
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button type="submit">העלה</Button>
      </Form>
    </Container>
  );
};

export default UploadItem;
