import axios from 'axios'
import React, { useState } from 'react'

type Props = {}

type OrderData = {
    name: string
    address: string
}

const CheckoutPage = (props: Props) => {
    const [isOrderSend, setIsOrderSend] = useState<boolean>(false)
    const [orderData, setOrderData] = useState<OrderData>({
        name: '',
        address: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState: OrderData) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState: OrderData) => ({
            ...prevState,
            address: e.target.value,
        }))
    }

    const orderSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        axios
            .post(
                'http://my-json-server.typicode.com/kznkv-skillup/server/orders',
                { name: orderData.name, address: orderData.address }
            )
            .then((res) => res.data)
            .then(({ name, address }) => {
                setOrderData({ name, address })
                setIsOrderSend(true)
            })
    }

    const renderForm = () => {
        return (
            <form>
                <div>
                    <input
                        type="text"
                        placeholder="Your name"
                        value={orderData.name}
                        onChange={handleName}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Your address"
                        value={orderData.address}
                        onChange={handleAddress}
                    />
                </div>
                <button type="submit">Send</button>
            </form>
        )
    }

    const renderMessage = () => {
        return (
            <div>
                <div>Dear, {orderData.name} thanks for order!</div>
                <p>Address: {orderData.address}</p>
            </div>
        )
    }
    console.log(orderData)
    return (
        <div>
            <h1>CheckoutPage</h1> {isOrderSend ? renderMessage() : renderForm()}
        </div>
    )
}

export default CheckoutPage
