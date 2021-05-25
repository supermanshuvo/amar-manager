import { Link } from "react-router-dom";

const Home = () => {
    const setData = () =>{
        let customer = [{"name":"Asif Salman Malik","address":"Babu Para, Alamdanga, Chuadanga.","mobile":"01770810050"},{"name":"Mahamudur Rahaman","address":"Banasree, Dhaka","mobile":"01915787135"},{"name":"Dolon Banerjee","address":"Puraton Bus Stand, Alamdanga, Chuadanga.","mobile":"01920696102"},{"name":"Aktaruzzaman Swopwon","address":"Hatboalia, Alamdanga, Chuadanga.","mobile":"01770810050"},{"name":"Aslam Hasib","address":"Damurhuda, Chuadanga.","mobile":"01711111111"}, {"name":"Superman Shuvo","address":"Shampur, Alamdanga, Chuadanga.","mobile":"01303316865"}];
        let stock = [{"product_name":"Miniket Rice - Regular","product_purchase":61.5,"product_sale":65.4,"product_quantity":589,"product_unit":"KG"},{"product_name":"Lux Beauty Soap(Rose) - 125g","product_purchase":30.78,"product_sale":35,"product_quantity":19,"product_unit":"Pcs"},{"product_name":"Rupchanda Soyabean Oil - 1 Ltr","product_purchase":128,"product_sale":140,"product_quantity":12,"product_unit":"Pcs"},{"product_name":"Radhuni Termaric Powder - 100g","product_purchase":29,"product_sale":35,"product_quantity":8,"product_unit":"Pcs"},{"product_name":"Pran Chinigura Rice - 1KG","product_purchase":108,"product_sale":120,"product_quantity":19,"product_unit":"Pcs"}];
        localStorage.setItem('customer', JSON.stringify(customer));
        localStorage.setItem('stock', JSON.stringify(stock));
        let invoice = [{"invoice_id":1,"invoice_date":"25/05/2021","invoice_time":"11:52 PM","invoice_customer":{"name":"Asif Salman Malik","address":"Babu Para, Alamdanga, Chuadanga.","mobile":"01770810050"},"invoice_items":[{"product_name":"Lux Beauty Soap(Rose) - 125g","product_purchase":30.78,"product_sale":35,"product_quantity":19,"product_unit":"Pcs","cart_qty":2}],"invoice_discount":0}];
        if(!invoice.length){
            console.log('I am empty');
        }else{
            localStorage.setItem('invoice', JSON.stringify(invoice));
        }
        // 
    }
    return(
        <div className="text-center mt-5">
            <h3 className="font-weight-bold">Welcome to আমার Manager Version 1.0</h3>
            <Link onClick={setData} className="btn btn-primary" to="/product">GET STARTED <i className="fa fa-long-arrow-alt-right"></i></Link>
        </div>
    );
}

export default Home;