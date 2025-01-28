import styled from 'styled-components'

const ContainerStyled = styled.div`
    padding: 10px;
    margin-top: 10px;
    
    width: 250px;

    display: flex;
    justify-content: center;
    flex-direction: column;

    background-color: #e8ebf7;
    border-radius: 3px;
`
const PStyled = styled.p`
    margin: 0;
`
export default function List({ items }){
    return(
        <>
            <ContainerStyled>
                {items.map((items, index) => (
                    <PStyled key={index}> {items} </PStyled>
                ))}
            </ContainerStyled>
        </>
    )
}