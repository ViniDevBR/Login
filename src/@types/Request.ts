export interface IMateriaisRequisicoes {
  Handle: number
  Numero: number
  Almoxarifado: string
  Observacoes: string | null
  QuantidadeTotal: number
  DataNecessidade: string
  DataStatus: string
  Status?: string
  Itens: Array<IMateriaisRequisicaoItens>
}

export interface IMateriaisRequisicaoItens {
  Handle: number
  CodigoBarras: string
  CodigoReferencia: string
  Produto: string
  HandleVariacao: number
  TemVariacao: boolean
  Variacao: string | null
  QuantidadeDisponivel: number
  QuantidadeRequisitada: number
  ItemQuantidade?: number
  Unidade: string
  ControlaLote: boolean
  Lotes: Array<IMateriaisRequisicaoItemLotes>
}

export interface IMateriaisRequisicaoItemLotes {
  Handle: number
  Lote: string
  DataFabricacao: string
  DataValidade: string
  QuantidadeDisponivel: number
  QuantidadeRequisitada: number
  LoteQuantidade?: number
}
