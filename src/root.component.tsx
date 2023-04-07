import { AppProps } from "single-spa";

export default function Root(props: AppProps) {
  return <section>{props.name} is mounted!</section>;
}
