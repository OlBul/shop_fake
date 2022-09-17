import {
    Button,
    Card,
    CardContent,
    TextareaAutosize,
    TextField,
    Typography,
} from '@mui/material'
import React, { useState } from 'react'

type Props = {}

type Review = {
    name: string
    text: string
}

const Reviews = (props: Props) => {
    const arrReviews: Review[] = [
        {
            name: 'Jack',
            text: 'I have gained a bit of weight since I got this chair, but I have never stopped flopping into it full dead weight, and it always takes it with ease!',
        },
        {
            name: 'Masha',
            text: 'As of writing this I have owned my chair for two days now, that being said out of the box assembly was easy enough and the chair came in good condition.',
        },
        {
            name: 'Sasha',
            text: 'So I am coming from the Homall Gaming Chair. I had it for I believe two years. Without scrolling up to see the price, I think it is about 40$ difference.',
        },
        {
            name: 'Mark',
            text: 'I was gifted the money to purchase this chair as a replacement for the first gaming chair I had of which I use for work.',
        },
        {
            name: 'Anna',
            text: 'I have gained a bit of weight since I got this chair, but I have never stopped flopping into it full dead weight, and it always takes it with ease!',
        },
        {
            name: 'John',
            text: 'It has been several months, and I still like the chair. I am full size, and it is comfortable for 4 hrs or so. ',
        },
    ]

    const [reviews, setReviews] = useState<Review[]>(arrReviews)
    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
    })

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState: Review) => ({
            ...prevState,
            name: e.target.value,
        }))
    }
    const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState: Review) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.text === '') {
            alert('All fields are required')
        } else {
            setReviews((prevState: Review[]) => {
                return [...prevState, newReview]
            })
            setNewReview({
                name: '',
                text: '',
            })
        }
    }

    return (
        <>
            <h2>Reviews</h2>
            {reviews.map((review: Review, i: number) => (
                <Card
                    variant="outlined"
                    style={{
                        margin: '20px 0',
                        background: '#e7e6e6',
                    }}
                    key={i}
                >
                    <CardContent>
                        <Typography variant="h6">{review.name}</Typography>
                        <Typography variant="h6">{review.text}</Typography>
                    </CardContent>
                </Card>
            ))}

            <form onSubmit={onSend}>
                <Card
                    variant="outlined"
                    style={{
                        maxWidth: 300,
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <CardContent>
                        <Typography variant="h6">
                            Please leave review
                        </Typography>
                        <div>
                            <TextField
                                size="small"
                                value={newReview.name}
                                onChange={handleChangeName}
                            />
                        </div>
                        <br />
                        <TextareaAutosize
                            minRows={5}
                            value={newReview.text}
                            onChange={handleChangeText}
                        />
                        <div>
                            <Button variant="outlined" type="submit">
                                Leave review
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </form>
        </>
    )
}

export default Reviews
