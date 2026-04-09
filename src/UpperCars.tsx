type TopCarsPropsType = {
  cars: TopCars[]
}

type TopCars = {
  manufacturer: string 
  model: string
}

export const UpperCars = (props: TopCarsPropsType) => {
  return (
    <div>
      <h1>TopCars</h1>
      <div>
        {props.cars.map(el => {
          return (
              <tr key={el.manufacturer}>
                <td>{el.manufacturer}</td>
                <td>{el.model}</td>
            </tr>
          )
        })}
      </div>
    </div>

  )
}