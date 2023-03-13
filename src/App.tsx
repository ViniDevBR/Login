import { Login } from "./pages/Login"
import { useEffect, useState } from "react"
import { 
  IMateriaisRequisicaoItemLotes, 
  IMateriaisRequisicaoItens, 
  IMateriaisRequisicoes 
} from "./@types/Request"
import { requestList } from "./mock"

function App() { 
  const [request, setRequest] = useState<IMateriaisRequisicoes[]>([])
  const [itens, setItens] = useState<IMateriaisRequisicaoItens[]>([])
  const [lotes, setLotes] = useState<IMateriaisRequisicaoItemLotes[]>([])

  function testForArray() {
    const filter = requestList.map(item => ({
        Almoxarifado: item.Almoxarifado,
        DataNecessidade: item.DataNecessidade,
        DataStatus: item.DataStatus,
        Handle: item.Handle,
        Itens: item.Itens.map(item => item.Handle),
        Numero: item.Numero,
        Observacoes: item.Observacoes,
        QuantidadeTotal: item.QuantidadeTotal,
        Status: item.Status
    }))
    setRequest(filter)

    const filterItens = requestList.map(item => 
      item.Itens.map(item => ({
        Handle: item.Handle,
        CodigoBarras: item.CodigoBarras,
        CodigoReferencia: item.CodigoReferencia,
        Produto: item.Produto,
        HandleVariacao: item.HandleVariacao,
        TemVariacao: item.TemVariacao,
        Variacao: item.Variacao,
        QuantidadeDisponivel: item.QuantidadeDisponivel,
        QuantidadeRequisitada: item.QuantidadeRequisitada,
        ItemQuantidade: item.ItemQuantidade,
        Unidade: item.Unidade,
        ControlaLote: item.ControlaLote,
        Lotes: item.Lotes.map(item => item.Handle)
      }))  
    )
    setItens(filterItens.flat(1))

    const filterLotes = requestList.map(item => 
      item.Itens.map(item => 
        item.Lotes.map(item => ({
          Handle: item.Handle,
          Lote: item.Lote,
          DataFabricacao: item.DataFabricacao,
          DataValidade: item.DataValidade,
          QuantidadeDisponivel: item.QuantidadeDisponivel,
          QuantidadeRequisitada: item.QuantidadeRequisitada,
          LoteQuantidade: item.LoteQuantidade,
        }))
      )
    )
    setLotes(filterLotes.flat(2))
  }

  useEffect(() => {
    testForArray()  
  },[])

  return (
    <Login /> 
  )
}

export default App