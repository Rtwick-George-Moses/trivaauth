"use server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import clientPromise from "../mongodb";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

const Difference = (arr1, arr2) => {
  const res = [];
  for (let i = 0; i < arr1.length; i++) {
    const el = arr1[i] - arr2[i];
    res[i] = el;
  }
  return res;
};

export async function Convert(req) {
  let obj = Object.fromEntries(req);
  let model_name = "embedding-001";
  let vec_length = 768;

  console.log(obj);

  let temp_array = Array.from({ length: vec_length }, () => Math.random());
  console.log(temp_array);
  let multi_array = temp_array.map((x) => x * obj.value);
  console.log(multi_array);
  console.log("hello");

  const model = genAI.getGenerativeModel({ model: model_name });

  const result = await model.embedContent(obj.response);
  const embedding = result.embedding.values;
  const stored_array = Difference(embedding, multi_array);

  console.log(stored_array);
  const doc = {
    userName: obj.email,
    Model: model_name,
    vec_length: vec_length,
    temp_array: temp_array,
    stored_array: stored_array,
  };
  try {
    const client = await clientPromise;
    const database = client.db("version1");
    const table = database.collection("userTable");
    const response = await table.insertOne(doc);
  } finally {
    //   await client.close();
  }
}
