import { ReactNode, useReducer } from 'react'

const initialState = {
  liters: localStorage.getItem('liters') || '',
  pricePerLiter: localStorage.getItem('pricePerLiter') || '',
  consumablePrice: localStorage.getItem('consumablePrice') || '',
  costPerBottle: localStorage.getItem('costPerBottle') || '',
  bottleVolume: localStorage.getItem('bottleVolume') || '0.28',
  costPerLabel: localStorage.getItem('costPerLabel') || '',
  costPerBung: localStorage.getItem('costPerBung') || '',
  barPurchaseAmount: localStorage.getItem('barPurchaseAmount') || '',
  distributorPercent: localStorage.getItem('distributorPercent') || '',
  taxPercent: localStorage.getItem('taxPercent') || '',
}

function reducer(
  state: any,
  {
    field,
    value,
  }: {
    field: string
    value: string
  }
) {
  return {
    ...state,
    [field]: value,
  }
}

export default function HomePage() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const onChange = (e: any) => {
    dispatch({ field: e.target.name, value: e.target.value })
    localStorage.setItem(e.target.name, e.target.value)
  }

  const {
    liters,
    pricePerLiter,
    consumablePrice,
    costPerBottle,
    bottleVolume,
    costPerLabel,
    costPerBung,
    barPurchaseAmount,
    distributorPercent,
    taxPercent,
  } = state

  const bottlesPerBatch = (liters / bottleVolume).toFixed(0).toString()
  const costOfAllBottles = (Number(bottlesPerBatch) * costPerBottle).toString()
  const totalLabelCost = (
    Number(costPerLabel) * Number(bottlesPerBatch)
  ).toString()
  const totalBungCost = (
    Number(costPerBung) * Number(bottlesPerBatch)
  ).toString()

  const totalСost = (
    Number(liters) * Number(pricePerLiter) +
    Number(consumablePrice) +
    Number(totalLabelCost) +
    Number(totalBungCost)
  ).toString()

  const totalRevenue = (
    Number(barPurchaseAmount) * Number(bottlesPerBatch)
  ).toString()

  const distributorPrice = (
    (Number(totalRevenue) * Number(distributorPercent)) /
    100
  ).toString()
  const tax = ((Number(totalRevenue) * Number(taxPercent)) / 100).toString()

  const profit = (
    Number(totalRevenue) -
    Number(totalСost) -
    Number(distributorPrice) -
    Number(tax)
  ).toString()

  return (
    <div className="py-[2rem]">
      <div className="text-[2.4rem] font-thin">Калькулятор лимонада</div>
      <div className="grid grid-cols-2 gap-x-[1rem]">
        <div className="flex flex-col space-y-[0.5rem]">
          <InputText
            title="Количество Литров"
            name="liters"
            placeholder="0"
            value={liters}
            onChange={onChange}
          />
          <Select
            title="Объем бутылки в Мл"
            name="bottleVolume"
            value={bottleVolume}
            options={[
              { value: '0.25', name: '0.25' },
              { value: '0.28', name: '0.28' },
              { value: '0.33', name: '0.33' },
              { value: '0.5', name: '0.5' },
            ]}
            onChange={onChange}
          />
          <InputText
            title="Цена варки за 1 Литр в ₽"
            name="pricePerLiter"
            placeholder="0"
            value={pricePerLiter}
            onChange={onChange}
          />
          <InputText
            title={`Цена Расходников на варку ${liters}Л в ₽`}
            name="consumablePrice"
            placeholder="0"
            value={consumablePrice}
            onChange={onChange}
          />
          <InputText
            title={`Себестоимость бутылки в ₽`}
            name="costPerBottle"
            placeholder="0"
            value={costPerBottle}
            onChange={onChange}
          />

          <InputText
            title={`Стоимость одной этикетки в ₽`}
            name="costPerLabel"
            placeholder="0"
            value={costPerLabel}
            onChange={onChange}
          />
          <InputText
            title={`Стоимость одной пробки в ₽`}
            name="costPerBung"
            placeholder="0"
            value={costPerBung}
            onChange={onChange}
          />
          <InputText
            className="border-fuchsia-700"
            title={`Цена покупки баром за 1 бутылку в ₽`}
            name="barPurchaseAmount"
            placeholder="0"
            value={barPurchaseAmount}
            onChange={onChange}
          />
          <InputText
            className="border-red-700"
            title={`Процент дистрибьютора (от 0 до 100)`}
            name="distributorPercent"
            placeholder="0"
            value={distributorPercent}
            onChange={onChange}
          />
          <InputText
            className="border-red-700"
            title={`Налог в процентах (от 0 до 100)`}
            name="taxPercent"
            placeholder="0"
            value={taxPercent}
            onChange={onChange}
          />
        </div>
        {/* results */}
        <div className="flex flex-col space-y-[0.5rem]">
          <InputText
            title={
              <div>
                Кол-во бутылок{' '}
                <span className="text-green-600">{bottleVolume}Мл</span> на{' '}
                <span className="text-green-600">{liters}Л</span>
              </div>
            }
            name="bottlesPerBatch"
            placeholder="0"
            value={bottlesPerBatch}
            disabled
          />
          <InputText
            title={
              <div>
                Стоимость{' '}
                <span className="text-green-600">{bottlesPerBatch}</span>{' '}
                бутылок в ₽
              </div>
            }
            name="costOfAllBottles"
            placeholder="0"
            value={costOfAllBottles}
            disabled
          />
          <InputText
            title={<div>Стоимость этикеток в ₽</div>}
            name="totalLabelCost"
            placeholder="0"
            value={totalLabelCost}
            disabled
          />
          <InputText
            title={<div>Стоимость пробок в ₽</div>}
            name="totalBungCost"
            placeholder="0"
            value={totalBungCost}
            disabled
          />
          <InputText
            title={<div>Полная стоимость производства в ₽</div>}
            name="totalСost"
            placeholder="0"
            value={totalСost}
            disabled
          />
          <InputText
            title={<div>Выручка с продажи без всех вычетов в ₽</div>}
            name="totalRevenue"
            placeholder="0"
            value={totalRevenue}
            disabled
          />
          <InputText
            className="border-red-700"
            title={<div>Сумма, которую получит дистрибьютор</div>}
            name="distributorPrice"
            placeholder="0"
            value={distributorPrice}
            disabled
          />
          <InputText
            className="border-red-700"
            title={<div>Налог</div>}
            name="tax"
            placeholder="0"
            value={tax}
            disabled
          />
          <InputText
            title={
              <div>
                Чистая прибыль <br />
                {totalRevenue} - {totalСost} - {distributorPrice} - {tax}
              </div>
            }
            name="profit"
            placeholder="0"
            value={profit}
            disabled
          />
        </div>
      </div>
    </div>
  )
}

type SelectProps = {
  title: string | ReactNode
  options: { value: string; name: string }[]
  name: string
  value: string
  onChange: (e: any) => void
}

function Select({ title, options, value, onChange, name }: SelectProps) {
  return (
    <label>
      <span className="text-gray-700">{title}</span>
      <select
        className={`
          mt-1 block w-full rounded-md border-transparent
        bg-gray-300
        focus:border-gray-500 focus:bg-white focus:ring-0
        `}
        name={name}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => {
          return (
            <option key={option.name} value={option.value}>
              {option.name}
            </option>
          )
        })}
      </select>
    </label>
  )
}

type InputTextProps = {
  title: string | ReactNode
  name?: string
  type?: string
  value: string
  placeholder?: string
  onChange?: (e: any) => void
  disabled?: boolean
  className?: string
}
function InputText({
  title,
  name,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  disabled,
  className,
}: InputTextProps) {
  return (
    <label>
      <span className="text-gray-700">{title}</span>
      <input
        className={`
          mt-1 block w-full rounded-md border-transparent
        bg-gray-300 focus:border-gray-500 focus:bg-white focus:ring-0
          disabled:bg-gray-800 disabled:text-white ${className}
        `}
        placeholder={placeholder}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </label>
  )
}
