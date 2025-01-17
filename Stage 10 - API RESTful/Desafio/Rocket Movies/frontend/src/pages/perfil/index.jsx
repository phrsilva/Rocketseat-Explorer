import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { usarAutenticacao } from "../../hooks/aut";
import { Container, Header, Avatar, Form } from "./styles";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { BotaoDeTexto } from "../../components/textButton";
import {FiArrowLeft, FiCamera, FiMail, FiLock, FiUser} from "react-icons/fi"
import avatarProvisorio from "../../assets/avatarProvisorio.svg";
import { api } from "../../../services/api";
import { Link } from "react-router-dom";

export function Perfil() {

    const { user, atualizarPerfil } = usarAutenticacao();

    const navigate = useNavigate();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [currentPassword, setCurrentPassword] = useState();
    const [newPassword, setNewPassword] = useState();


    const avatarURL = user.avatar ? `${api.defaults.baseURL}files/${user.avatar}` : avatarProvisorio;
    const [avatar, setAvatar] = useState(avatarURL);
    const [previaAvatar, setPreviaAvatar] = useState(null);

    async function lidarComAtualizacao() {
        // avaliar comportamento do avatar e previa avatar
        const atualizarUser = {
            name,
            email,
            password: currentPassword,
            new_password: newPassword
        }
        
        const usuarioAtualizado = Object.assign(user, atualizarUser);
        
        await atualizarPerfil({user: usuarioAtualizado, previaAvatar});  
        
        navigate(-1);
    
    }


    function mudarAvatar(event) {
        const file = event.target.files[0];
        setPreviaAvatar(file);

        const previaPerfil = URL.createObjectURL(file);
        setAvatar(previaPerfil);
    }
    
    return (
        <Container>
            <Header>
                <BotaoDeTexto icon={FiArrowLeft} title="Voltar" onClick={() => navigate(-1)}/>
            </Header>
                     
            <Form>

                <Avatar>
                        <img src={avatar} alt="Foto de perfil" />
                        <label htmlFor="avatar">
                            <FiCamera />
                            <input 
                            id="avatar"
                            type="file"
                            onChange={mudarAvatar} />
                        </label>
                </Avatar>


                <Input icon={FiUser} 
                type="text" 
                placeholder="Nome" 
                value={name}
                onChange={(e) => setName(e.target.value)}                
                />
                <Input icon={FiMail} 
                type="email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </Form>

            <Form>
                <Input icon={FiLock} type="password" placeholder="Senha atual" onChange={(e) => setCurrentPassword(e.target.value)} />
                <Input icon={FiLock} type="password" placeholder="Nova Senha" onChange={(e) => setNewPassword(e.target.value)} />
                
                
                <Button title={"Salvar alterações"} onClick={lidarComAtualizacao}/> 

            </Form>



        </Container>

    );
}


// Código de apoio \/

// export function Profile() {

//     const { user, atualizarPerfil } = usarAutenticacao();

//     const [name, setName] = useState(user.name);    
//     const [email, setEmail] = useState(user.email);
//     const [senhaAtual, setSenhaAtual] = useState()
//     const [novaSenha, setNovaSenha] = useState() //renomeado


//     const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
//     const [avatar, setAvatar] = useState(avatarUrl); //passado avatarUrl
//     const [avatarFile, setAvatarFile] = useState(null);
   

//     async function handleUpdate() {
        
//         const attUser = {
//             name,
//             email,
//             senha: senhaAtual, //renomeado
//             nova_senha: novaSenha 
//         }
//         const userUpdated = Object.assign(user, attUser) // nova funcao
//         await atualizarPerfil({user: userUpdated, avatarFile}); //
//     }

//     function handleChangeAvatar(event) {
//         const file = event.target.files[0];
//         setAvatarFile(file);

//         const imagePreview = URL.createObjectURL(file);
//         setAvatar(imagePreview);
//     }


//     return (
//         <Container>
//             <header>
//                 <Link to="/"><FiArrowLeft /></Link>
//             </header>
//             <Form>
//                 <Avatar>
//                     {/* mudado para avatar o src */}
//                     <img src={avatar} alt="Foto de perfil" /> 
//                     <label htmlFor="avatar">
//                         <FiCamera />
//                         <input 
//                         id="avatar"
//                         type="file" 
//                         onChange={handleChangeAvatar}/>
//                     </label>
//                 </Avatar>

//                 <Input 
//                 placeholder="Nome"
//                 type="text"
//                 icon={FiUser}
//                 value={name}
//                 onChange={e => setName(e.target.value)}
//                 />

//                 <Input 
//                 placeholder="E-mail"
//                 type="text" 
//                 icon={FiMail}
//                 value={email}
//                 onChange={e => setEmail(e.target.value)}
//                 />

//                 <Input 
//                 placeholder="Senha Atual"
//                 type="password"
//                 icon={FiLock}
//                 onChange={e => setSenhaAtual(e.target.value)}

//                 />

//                 <Input
//                 placeholder="Nova Senha"
//                 type="password"
//                 icon={FiLock}
//                 onChange={e => setNovaSenha(e.target.value)}


//                 />

//                 <Button title="Salvar" onClick={handleUpdate}/>

//             </Form>
//         </Container>
//     );
// }