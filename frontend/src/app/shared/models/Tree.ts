export interface Tree {
  id?: number
  singleName: string
  popularName: string | null
  family: string
  botanicalName: string
  nameMeaning: string | null
  generalDescription: string
  specialDescription: string | null
  whereOccurs: string | null
  ecologicalInfo: string | null
  phenologicalInfo: string | null
  propagation: string | null
  managementGuide: string | null
  utilities: string | null
  culturalImportance: string | null
}
