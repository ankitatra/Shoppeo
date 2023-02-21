import axios from "axios"
const BASE_URL="http://localhost:5000/api"
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjFiMjczOGRmMjI4ZDQ3NDczMTUwNyIsImlhdCI6MTY3Njk1MDcwNywiZXhwIjoxNjc3MjA5OTA3fQ.aX2OdBigT28P78VCJXpZ4pX-FH0TqFlJerW4DgpH3S4"
export const pulblicRequest=axios.create({
 baseURL:BASE_URL
})

export const userRequest=axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
   })

