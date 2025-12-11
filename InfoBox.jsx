import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({info}){
    const img ="https://images.unsplash.com/photo-1722858343990-1604f540c15d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    
    const hot_img = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const cold_img = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const rain_img = "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=hOE6L7f7OoSKUW1Q4tR27GoEkOU_ywKJGCvSO77SeZg=";

    return(
        <div className="Info">
            <br />
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={info.humidty > 80 ? rain_img : info.temp >16 ? hot_img: cold_img}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' } } component={"span"}>
                    <p>Temperature = {info.temp}&deg;C</p>
                    <p>Humidty = {info.humidity}</p>
                    <p>Min Temp = {info.tempMin}</p>
                    <p>Max Temp = {info.tempMax}</p>
                    <p>The weather can be described as {info.Weather} and feels like {info.feelsLike}&deg;C</p>
                  </Typography>
                </CardContent>
            </Card>

        </div>
    );
}