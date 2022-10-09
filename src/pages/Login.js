import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import UserContext from "../contexts/userContext";

export default function Login() {
    const URL = "http://localhost:5000/user";
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({ username: '' });
    const { setUser } = useContext(UserContext);

    function handleInputChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function signUp(event) {
        event.preventDefault();
        setLoading(true);
        const promise = axios.post(URL, formData);
        promise.then(() => {
            setUser(formData.username);
            sessionStorage.setItem('username', formData.username);
            navigate("/quiz");
        }).catch((error) => {
            alert(error);
            setFormData({ username: '' });
            setLoading(false);
        })
    }

    return (
        <Container>
            <Header>
                <p>Quizz Game</p>
            </Header>
            <Form onSubmit={signUp}>
                <input disabled={loading} type="text" name="username" value={formData.username} onChange={handleInputChange} placeholder="Username" required />
                <Button disabled={loading} type="submit">{loading ? <ThreeDots color="#FFFFFF" /> : 'Play'}</Button>
            </Form>
        </Container>
    )
}

const Container = styled.section`
    width: 90vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Header = styled.header`
    p {
        font-size: 20px;
        margin-top: 25px;
        color: #373737;
    }
`

const Form = styled.form`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background: white;
    padding: 20px;
    margin-top: 30px;
    border-radius: 8px;

    input {
        width: 100%;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        font-size: 20px;
        font-weight: 400;
        color: #DBDBDB;
        padding-left: 11px;
        margin-bottom: 6px;
    }
`

const Button = styled.button`
    width: 100%;
    height: 45px;
    background: #373737;
    border: none;
    border-radius: 4.64px;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 21px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    opacity: ${props => props.disabled ? 0.7 : 1};
    cursor: pointer;
`