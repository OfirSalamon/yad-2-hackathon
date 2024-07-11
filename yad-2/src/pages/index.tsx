import UploadItem from "@/components/upload-item/upload-item.component";
import { Text } from "@/styles/typography/typography.styles";
import { IDetails } from "@/types";
import getFormAutocomplete from "@/utils/api/get-ai-details/get-form-autocomplete";
import Header from "@components/header/header.component";
import { useEffect, useState } from "react";

const Home = () => {
  const [options, setOptions] = useState<IDetails>();

  const getFormDetails = async () => {
    getFormAutocomplete().then((data) => setOptions(data));
  };

  useEffect(() => {
    getFormDetails();
  }, []);

  return (
    <>
      <Header />
      {options && <UploadItem options={options} />}
    </>
  );
};

export default Home;
