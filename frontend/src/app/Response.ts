export interface Response<T> {
  data: T,
  errors?: string[];
}
