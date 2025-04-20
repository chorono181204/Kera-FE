import axios from 'axios'
import { API_URL } from '../utils/constants.js'

export const fetchBoardDetailsAPI = async (boardId) => {
  const response = await axios.get(`${API_URL}boards/${boardId}`)
  return response.data?.result
}
export const moveColumnInBoardAPI = async (updateData) => {
  const response = await axios.patch(`${API_URL}columns`, updateData)
  return response.data?.result
}
export const moveCardInColumnAPI = async (updateData) => {
  const response = await axios.patch(`${API_URL}cards`, updateData)
  return response.data?.result
}
export const moveCardInBoardAPI = async (updateData) => {
  const response = await axios.put(`${API_URL}cards`, updateData)
  return response.data?.result
}
export const createColumnAPI = async (data) => {
  const response = await axios.post(`${API_URL}columns`, data)
  return response.data?.result
}
export const createCardAPI = async (data) => {
  const response = await axios.post(`${API_URL}cards`, data)
  return response.data?.result
}
