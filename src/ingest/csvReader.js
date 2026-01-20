import { parse } from "fast-csv";

const data = parse({ headers: true })
  .on("data", row => console.log(row));



export default data