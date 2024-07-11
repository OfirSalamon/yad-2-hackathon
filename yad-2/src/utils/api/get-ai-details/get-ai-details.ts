import makeRequest from "../make-request";

const getAiDetails = async (request: {
  url: string;
  description?: string;
}): Promise<any> => {
  return await makeRequest(`/process_image`, {
    method: "POST",
    body: request,
  });
};

export default getAiDetails;
