import Image from '../models/Image';
export default {
    render(image: Image) {
        return {
            id: image.id,
            // url: `http://192.168.100.65:3333/uploads/${image.path}`,      
            url: `http://192.168.0.18:3333/uploads/${image.path}`,      
        };
    },
    renderMany(images: Image[]){
        return images.map(image => this.render(image))
    }
}