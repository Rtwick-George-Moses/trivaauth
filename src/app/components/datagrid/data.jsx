"use server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import clientPromise from "../mongodb";

export async function Validate(req) {
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
  const Difference = (arr1, arr2) => {
    const res = [];
    for (let i = 0; i < arr1.length; i++) {
      const el = arr1[i] - arr2[i];
      res[i] = el;
    }
    return res;
  };

  const flag_value = (arr) => {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
      const hold = Math.abs(arr[i].toFixed(4));
      res = res + hold;
    }
    return res / arr.length;
  };

  let obj = Object.fromEntries(req);
  let model_name = "embedding-001";
  let vec_length = 768;

  console.log(obj);

  var temp_array = JSON.parse("[" + obj.temp_array + "]");
  let multi_array = temp_array.map((x) => x * obj.value);
  console.log("hello");

  const model = genAI.getGenerativeModel({ model: model_name });

  const result = await model.embedContent(obj.response);
  const embedding = result.embedding.values;
  const stored_array = Difference(embedding, multi_array);
  const memory_array = JSON.parse("[" + obj.stored_array + "]");

  const result_array = Difference(stored_array, memory_array);
  console.log("done");
  console.log(result_array);
  let flag_val = flag_value(result_array);
  console.log(flag_val);
  if (flag_val < 0.014) {
    return true;
  } else {
    return false;
  }
}
