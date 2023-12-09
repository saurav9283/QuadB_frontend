import axios from "axios";

const url=process.env.REACT_APP_API_URL;
console.log(url);

const getCryptoService = () => axios.get(`${url}/crypto`);

export default getCryptoService;
