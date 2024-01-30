import { 
  PUBLIC_SANOTY_PROJECT_ID, 
  PUBLIC_SANITY_DATASET,
  PUBLIC_SANITY_API_VERSION 
} from "$env/static/public";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: PUBLIC_SANOTY_PROJECT_ID,
  dataset: PUBLIC_SANITY_DATASET,
  apiVersion: PUBLIC_SANITY_API_VERSION,
  useCdn: false,
});

export async function load() {
  const data = await client.fetch(`*[_type == "resume"]`);
  
  if (data) {
    return {
      data: data,
    };
  }

  return {
    status: 500,
    body: new Error("Could not load resume"),
  };
}