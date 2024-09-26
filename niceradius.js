//==================================================CONFIG====================================
const apiKey = 'API_KEY_ANDA';
const routerID = 'ROUTER_ID';
//==================================================CONFIG====================================
const apiUrl = 'https://niceradius.com/api';
async function getData(path){
	return new Promise(resolve => {
		$.ajax({
			type: "post",
			url: apiUrl + '/' + path,
			data: {apiKey: apiKey, routerID: routerID},
			success: (data) => {resolve(data);}
		})
	})
}

async function getPaymentMethod(itemID){
	return new Promise(resolve => {
		$.ajax({
			type: "post",
			url: apiUrl + '/payment_method',
			data: {apiKey: apiKey, item_id: itemID},
			success: (data) => {resolve(data);}
		})
	});
}

async function createInvoice(params){
	params.apiKey = apiKey;
	return new Promise(resolve => {
		$.ajax({
			url: apiUrl + '/checkout',
			type: 'POST',
			data: params,
			success: (data) => {
				resolve(data);
			}
		});
	})
}
async function getInvoice(params){
    params.apiKey = apiKey;
    return new Promise(resolve => {
        $.ajax({
            type: 'post',
            url: apiUrl + '/get_transaction',
            success: (data) => {
                resolve(data);
            }
        });
    });
}
