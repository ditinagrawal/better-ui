import { LoadingButton } from "@/registry/new-york/items/loading-button/loading-button";

const onClick = async () => {
  // Simulate an async operation (e.g., API call)
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("Button action completed!");
};

export const BasicLoadingButton = () => {
  return <LoadingButton onClick={onClick}>Click me</LoadingButton>;
};
