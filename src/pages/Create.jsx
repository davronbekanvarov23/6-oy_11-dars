import { Form } from "react-router-dom";
import { FormInput } from "../components";

//action
export const action = async ({ request }) => {
  let formData = await request.formData();
  let title = formData.get("title");
  let author = formData.get("author");
  let cover = formData.get("cover");
  let description = formData.get("description");
  let genres = formData.get("genres");
  let image = formData.get("image");
  let page = formData.get("page");
  return { title, author, cover, description, genres, image, page };
};

function Create() {
  return (
    <div className="align-content text-center pt-10">
      <div className="font-bold text-3xl mb-5"> Create new Book</div>
      <Form method="post">
        <FormInput name="title" label="title" type="text" />
        <FormInput name="author" label="author" type="text" />
        <FormInput name="cover" label="cover" type="text" />
        <FormInput name="description" label="description" type="text" />
        <FormInput name="genres" label="genres" type="text" />
        <FormInput name="image" label="Image" type="url" />
        <FormInput name="page" label="Pages" type="number" />
      </Form>
    </div>
  );
}

export default Create;
