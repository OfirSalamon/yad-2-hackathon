import { IDetails } from "@/types";
import makeRequest from "../make-request";

const getFormAutocomplete = async (): Promise<IDetails> => {
  return await makeRequest(`/utils/meta`);
};

export default getFormAutocomplete;
