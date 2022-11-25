import { TextField, Button} from '@mui/material';

export default function SearchBar() {
    return (
        <div style={{display:'flex',justifyContent: 'center'}}>
            <TextField 
                style={{ 
                    color: '#fff', 
                    background:'#fff', 
                    marginTop: '20%',
                    width: '40%',
                    borderRadius: '2px',           
                }} 
                id="outlined-basic" 
                label="Search for Address" 
                variant="filled" 
            />
            <Button 
                style={{
                    marginTop: '20%',
                    marginLeft: '1%',
                    width: '8%',

                }}
                variant="contained"
            >
                Search
            </Button>
        </div>
    );
}