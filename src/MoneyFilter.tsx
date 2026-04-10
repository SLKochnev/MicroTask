import { FilterType } from './App'

type MoneyFilterProps = {
  money: Money[]
   onClickFilterHandler: (filter: FilterType) => void
}

type Money = {
  banknots: string
  value: number
  number: string
}

export const MoneyFilter = (props: MoneyFilterProps) => {
  const {money, onClickFilterHandler} = props
  return (
    <>
        <ul>
            {money.map((ObjFromMoneyArr, index) => {
                return (
                    <li key={index}>
                        <span>{ObjFromMoneyArr.banknots}</span>
                        <span>{ObjFromMoneyArr.value}</span>
                        <span>{ObjFromMoneyArr.number}</span>
                    </li>
                )
            })}
        </ul>
        <div style={{marginLeft: '35px'}}>
            <button onClick={() => onClickFilterHandler('All')}>All</button>
            <button onClick={() => onClickFilterHandler('RUBLS')}>RUBLS</button>
            <button onClick={() => onClickFilterHandler('Dollars')}>Dollars</button>
        </div>
    </>
  )
}