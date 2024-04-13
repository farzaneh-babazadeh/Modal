// show-modal click ==> opacity =1 and display=block
const showModalBtn =document.querySelector(".show-modal");
const modal =document.querySelector(".modal");
const backDrop =document.querySelector(".backdrop");
const closeModal = document.querySelector(".close-modal")



showModalBtn.addEventListener('click', () =>{
    modal.style.opacity='1';
    backDrop.style.display='block';
    modal.style.transform='translateY(20vh)';
    
});
 
function closeModalFunction(){
    modal.style.opacity='0';
    backDrop.style.display='none';
    modal.style.transform='translateY(-100vh)';
    
}
closeModal.addEventListener('click',closeModalFunction)

backDrop.addEventListener('click',closeModalFunction)