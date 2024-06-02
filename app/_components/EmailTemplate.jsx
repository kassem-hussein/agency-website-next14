export const EmailTemplate = ({name,phone,email,plan}) => (
  <div>
    <div style={{fontSize:"16px"}}>NEW CUSTOMER ORDER</div>
    <div style={{marginTop:"20px"}}>
        <div>Customer Information</div><hr/>
        <div>Name<span style={{marginLeft:"100px",marginBottom:"5px",marginTop:"10px"}}>{name}</span></div><hr/>
        <div>email<span style={{marginLeft:"100px",marginBottom:"5px"}}>{email}</span></div><hr/>
        <div>phone<span style={{marginLeft:"100px",marginBottom:"5px"}}>{phone}</span></div><hr/>
        <div>plan<span style={{marginLeft:"100px"}}>{plan}</span></div>
    </div>
  </div>
);
