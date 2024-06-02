export const EmailMessage = ({name,phone,email,message}) => (
      <div>
        <div style={{fontSize:"16px"}}>New Customer Message</div>
        <div style={{marginTop:"20px"}}>
            <div>Customer Information</div><hr/>
            <div>Name<span style={{marginLeft:"100px",marginBottom:"5px",marginTop:"10px"}}>{name}</span></div><hr/>
            <div>email<span style={{marginLeft:"100px",marginBottom:"5px"}}>{email}</span></div><hr/>
            <div>phone<span style={{marginLeft:"100px",marginBottom:"5px"}}>{phone}</span></div><hr/>
            <div>message</div>
            <div>
              <div style={{marginTop:"10px"}}>{message}</div>
            </div>
        </div>
      </div>
    );
    