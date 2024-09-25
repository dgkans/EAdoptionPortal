import axios from 'axios'


const URL="http://3.110.178.10:8080/parent"

class ParentFunctions
{

    getAllChilds(){
        return axios.get(URL+'/childdetails')
    }


    addoptionForm(addform) 
    {
       return axios.post(URL+'/addadoptionform',addform)
    }   


    viewResponse(id)
    {
        return axios.get(URL+'/viewresponse'+'/'+id)
    }

    viewDocumentResponse(id)
    {
        return axios.get(URL+'/viewdocumentrespons'+'/'+id)
    }

}
export default new ParentFunctions();