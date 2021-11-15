import { useState, useEffect } from 'react';
import * as C from './App.styles'
import { items } from './data/items';
import { categories } from './data/categories';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter'
import { TableArea } from './components/TableArea';


const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
    console.log(currentMonth)
  }, [list, currentMonth])

  return (

    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema de Finanças Pessoais</C.HeaderText>
      </C.Header>
      <C.Body>

        {/* Área de informações */}

        {/* Área de inserções */}

        {/* Tabela de itens */}

        <TableArea list={filteredList} />
        
      </C.Body>
      {/* <C.Footer>
        <C.FooterContatos>
          <p>nome do lugar</p>
          <p>cnpj</p>
          <p>localizaçao</p>
          <p>ciadde, Brasil</p>
        </C.FooterContatos>
        <C.FooterLinks>
          <a href='https://www.youtube.com/watch?v=3BB7pgUVgQo&ab_channel=AnimaisEngra%C3%A7ados'> Link1 </a>
          <a href='https://www.youtube.com/watch?v=3BB7pgUVgQo&ab_channel=AnimaisEngra%C3%A7ados'> Link2 </a>
          <a href='https://www.youtube.com/watch?v=3BB7pgUVgQo&ab_channel=AnimaisEngra%C3%A7ados'> Link3 </a>
          <a href='https://www.youtube.com/watch?v=3BB7pgUVgQo&ab_channel=AnimaisEngra%C3%A7ados'> Link4 </a>
          <a href='https://www.youtube.com/watch?v=3BB7pgUVgQo&ab_channel=AnimaisEngra%C3%A7ados'> Link5 </a>
        </C.FooterLinks>
      </C.Footer> */}
    </C.Container>


  )

}
export default App;