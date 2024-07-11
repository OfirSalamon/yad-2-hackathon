import makeRequest from "../make-request";

export interface IAiDeatail {
  title: string;
  description: string;
  condition: string;
  color: string;
  material: string;
  style: string;
  manufacturer: string;
  height: number;
  depth: number;
  length: number;
  model: string;
  type: string;
  market_price: string;
  above_market_price: string;
  below_market_price: string;
}

const getAiDetails = async (request: {
  url: string;
  description?: string;
}): Promise<IAiDeatail> => {
  return await makeRequest(`/products/process_details`, {
    method: "POST",
    body: request,
  });
};

export default getAiDetails;
