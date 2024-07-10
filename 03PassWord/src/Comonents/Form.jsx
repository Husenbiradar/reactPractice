import React from 'react'

function Form() {

    const NameBtn =()=>{
        let Name = document.getElementById('NameId').value; 
        let str= 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

        if(Name == str){
            document.getElementById('NameMeessage').innerHTML = ' '
        }
        else{
            document.getElementById('NameMeessage').innerHTML = 'Name is not valid'
            console.log('my name is khan');
        }
    }

    return (
        <>
            <div style={{ textAlign: 'right' }}>
                <h1>Sign Up</h1>

                <div>
  <label htmlFor="NameId" style={{ paddingRight: "12px" }}>Full Name :</label>
  <input type="text" placeholder='Enter a name' id='NameId' onKeyDown={NameBtn} />
  <div id='NameMeessage' ></div>
</div>

                <div>
                    <label htmlFor="" style={{ paddingRight: "12px" }}>Email</label>
                    <input type="text" placeholder='Enter Gmail' />
                    <div></div>
                </div>
                <div>
                    <label htmlFor="" style={{ paddingRight: "12px" }}>Number</label>
                    <input type="text" placeholder='Enter Phone Number' />
                    <div></div>
                </div>
                <div>
                    <label htmlFor="" style={{ paddingRight: "12px" }}>Password</label>
                    <input type="password" placeholder='Enter Password' />
                    <div></div>
                </div>

                <button>SubMit</button>
            </div>

        </>
    )
}

export default Form
