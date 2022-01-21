export interface dataItemInFa {
  id: number,
  key: number,
  name: string,
  age: number,
  sex: string,
  job: string
}

export interface dataListInFa {
  dataList: dataItemInFa[]
}

export interface dataColumnItemInFa {
  title: string,
  dataIndex: string,
  key: string,
  render?: (text: string, record: any) => JSX.Element
}