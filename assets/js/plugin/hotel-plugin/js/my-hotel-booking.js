
function ucfirst(str) {
	return str.replace(/\b\w+/g, function(word) {
		if (word.length >= 1) {
			return word.charAt(0).toUpperCase() + word.charAt(1).toUpperCase() + word.slice(2);
		} else {
			return word.charAt(0).toUpperCase() + word.slice(1);
		}
	});
}
jQuery(document).ready(function($) {
	
	
        /*function initMap() {
          var mapOptions = {
            zoom: 8,
            center: new google.maps.LatLng(-34.397, 150.644),
          };

          var map = new google.maps.Map(document.getElementById('map_cstmku'), mapOptions);

          // Add markers to the map
          var locations = [
            { lat: -34.397, lng: 150.644 },
            { lat: -35.297, lng: 149.644 },
            { lat: -33.897, lng: 151.244 }
          ];
			console.log("yyyyyrr");
          for (var i = 0; i < locations.length; i++) {
            var marker = new google.maps.Marker({
              position: locations[i],
              map: map,
            });
          }
        }

        initMap();*/
     
	
	var currency_sign = "£";
	
	var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	
	var get_text = $('.top_destination .destination-item .title a').text();
	
	$('.home .top_destination .title a').each(function() {
		
		var get_text = $(this).text();
				
        // Set the new href value here
        var newHref = "https://thehotelhub.co.uk/search-hotel/?location_name="+get_text.trim();
        
        // Change the href attribute
        $(this).attr('href', newHref);
		
		console.log("wewew");
    });
	
	
	//custom js for searching button starts here 
	
	// Custom JS for search button starts here
$('.btn-search').click(function(e) {
    e.preventDefault();
    
    // Get values from input fields
    var location_name = $('#location_name').val().trim();
    var search_hotel_name = $('#search_hotel_name').val().trim();
    var check_in = $('input[name="start"]').val().trim();
    var check_out = $('input[name="end"]').val().trim();
    var date = $('input[name="date"]').val().trim();
    var location_country = $('input[name="location_country"]').val().trim();
    var room_num_search = $('input[name="room_num_search"]').val().trim(); // New input field for room number
    var adult_number = $('input[name="adult_number"]').val().trim(); // New input field for adult number
    var child_number = $('input[name="child_number"]').val().trim(); // New input field for child number

    // Base URL for search
    var base_url = "https://thehotelhub.co.uk/search-hotel/";

    // Prepare query parameters
    var query_params = [];
    if (location_name) {
        query_params.push("location_name=" + encodeURIComponent(location_name));
    }
    if (search_hotel_name) {
        query_params.push("search_hotel_name=" + encodeURIComponent(search_hotel_name));
    }
    if (check_in) {
        query_params.push("start=" + encodeURIComponent(check_in));
    }
    if (check_out) {
        query_params.push("end=" + encodeURIComponent(check_out));
    }
    if (date) {
        query_params.push("date=" + encodeURIComponent(date));
    }
	if (location_country) {
        query_params.push("location_country=" + encodeURIComponent(location_country));
    }
	if (room_num_search) { // New condition for room number
        query_params.push("room_num_search=" + encodeURIComponent(room_num_search));
    }
    if (adult_number) { // New condition for adult number
        query_params.push("adult_number=" + encodeURIComponent(adult_number));
    }
    if (child_number) { // New condition for child number
        query_params.push("child_number=" + encodeURIComponent(child_number));
    }
    // Construct the final URL
    var final_url = base_url + '?' + query_params.join('&');

    // Redirect to the constructed URL
    window.location.href = final_url;
});
// Custom JS for search button ends here

	
	
	
	/* $('.btn-search').click(function(e) {
        e.preventDefault();
        var location_name = $('#location_name').val().trim();
        var search_hotel_name = $('#search_hotel_name').val().trim();
        var base_url = "https://thehotelhub.co.uk/search-hotel/";
        var query_params = [];
        if (location_name) {
            query_params.push("location_name=" + encodeURIComponent(location_name));
        }
        if (search_hotel_name) {
            query_params.push("search_hotel_name=" + encodeURIComponent(search_hotel_name));
        }
        var final_url = base_url + '?' + query_params.join('&');
        window.location.href = final_url;
    }); */
	
	//custom js for searching button ends here 
	
	
	//.top_destination .destination-item .title a
	
	//$(".top_destination .destination-item .title a").attr("href","javascript:void(0);");
	
	$(document).on('click', '.hotel_hm_search', function(e) {
		$(this).hide();
		$(".location_hm_search").show();
		$("#location_name").hide();
		$("#search_hotel_name").show();
	});
	
	$(document).on('click', '.location_hm_search', function(e) {
		$(this).hide();
		$(".hotel_hm_search").show();
		$("#location_name").show();
		$("#search_hotel_name").hide();
	});
	
	$(document).on('click', '.top_destination .destination-item .title a', function(e) {
		e.preventDefault();
		var get_text = $(this).text();
		//console.log(get_text.trim());
		
		window.location.href="https://thehotelhub.co.uk/search-hotel/?location_name="+get_text.trim();
		return false; 
	}); 
	
	
	
	$(document).on('change', '.rating_checkbox_search .checkbox_search_item', function() {
		var rateValue = $(this).val();

        // Get the current page URL
        var currentUrl = window.location.href;

        // Create a URL object
        var url = new URL(currentUrl);

        // If checkbox is checked, add or update the hotel_rate parameter
        if ($(this).is(':checked')) {
            url.searchParams.set('hotel_rate', rateValue);
        } else {
            // If checkbox is unchecked, remove the hotel_rate parameter
            url.searchParams.delete('hotel_rate');
        }
		
		window.location.href = url.href;
		
	});
	
	$(document).on('change', '#children', function() {
        //var child_count = $(this).is(':checked');
        var child_count_value = $(this).val();
		$('.child_age_field_inside').empty();
		var child_age = [];
		console.log('child_count_value'); 
		console.log(child_count_value);
		if(child_count_value>=1){
			for(var i=1;i<=child_count_value; i++){				
				$('.child_age_field_inside').append(
					'<input style="margin:10px;" type="number" name="child_age_field[]" class="form-control child_age_field_input" placeholder="Child ' + (i) + ' age" max="17">'
				);
			}
		} 
		
		
    });
	
	
	
	$(document).on('click', '.chk_status', function() {  
		$('.loader').show();
		$('#preloder').show();	
		var partner_booking_id = $(this).attr('partner_booking_id');
		$.ajax({
			type: 'POST',
			url: myAjax.ajaxurl,
			data: {
				action: 'cancel_booking',				
				partner_booking_id:partner_booking_id,
				security: myAjax.security 
			},
			success: function(response) {
				if (response.success) {
					$(".refund_status").text("Request send for refund.");
				}
				$('.loader').hide();
				$('#preloder').hide();	
			},
			error: function(error) {
				$('.loader').hide();
				$('#preloder').hide();				
				console.log(error);
			}
		});
	}); 
	
	/*$(document).on('click', '.payment_btn', function(e) { 
		var formId = "cc-form";
		var formData = $("#"+formId).serialize();
		
		var formDataObj = {};
			formData.split('&').forEach(function(pair) {
				var [key, value] = pair.split('=');
				formDataObj[decodeURIComponent(key)] = decodeURIComponent(value);
			});

		console.log("Formdd Data Object: ", formDataObj);
            
	});*/
	
    //$('.form-check-availability-hotel').on('submit', function(e) {
	$(document).on('click', '.btn_ava', function(e) { 
	
		var get_check_in = $(".check-in-render").text();
		var get_check_out = $(".check-out-render").text();
		
		if(get_check_in=="" || get_check_out==""){
			var error_msg = "Select checkin and checkout";
			var error_send = "<div class='er_msg'>"+error_msg+"</div>";
			$(".form-head").html(error_send);
			$('.loader-wrapper').hide();
						
			//alert("Select checkin and checkout");
			return false;
		}
		$(".er_msg").hide();
		var hotel_name = $(".st-service-header .st-heading").text();
		
		var hotel_id = $(".hotel_id").val();

		var allFilled = false;
		var agesArray = [];
		$('.child_age_field_input').each(function() {
			var age = $(this).val().trim();
			if (age === '') {
				allFilled = true;
				$('.er_msg').html("Please enter the age of child");
				$('.er_msg').show();
				
				return false;
			} else{
				if(age<=17){
					//$('.error_cls').text("Children age should be less then 17");
					//$('.error_cls').show();
					agesArray.push(age);
					
				}				
				
			}
			
		});
		
		console.log(agesArray);
		var child_age = agesArray.toString();
		if (allFilled) { 
			return false;
		}

		$('.er_msg').hide();
		
		//return false;
		
        var formId = "ava_check_form";
        if (formId === 'homepageform') {
            return true;
        } else {
			
            e.preventDefault();
            //$('#loader').show();
			$('.loader-wrapper').show();
			//$('#preloder').show();
            $('#availability_results').empty();     

            // Serialize form data
            var formData = $("#"+formId).serialize();
		
			var formDataArray = $(this).serializeArray();

			var formDataObj = {};
			formData.split('&').forEach(function(pair) {
				var [key, value] = pair.split('=');
				formDataObj[decodeURIComponent(key)] = decodeURIComponent(value);
			});

			console.log("Formdd Data Object: ", formDataObj);
			
			

			// Access adults and children
			var adults = formDataObj.adult_number;
			var children = formDataObj.child_number;
			
			var adddress = $(".hotel_sin_add").val(); 
			
			//console.log("Adults: ", adults);
           // console.log("Children: ", children);
			//return false;
            formData += '&security=' + myAjax.security;

            $.ajax({
                type: 'POST',
                url: myAjax.ajaxurl,
                data: {
                    action: 'check_availability',
                    form_data: formData,
                    security: myAjax.security
                },
                success: function(response) {
                    //$('#loader').hide();
					
					if (response.success == false) {
						var error_msg = response.data.message;
						if(error_msg=="No Hotels Available!"){
							error_msg = "Hotel has no availability";
						}
						var error_send = "<div class='er_msg'>"+error_msg+"</div>";
						$(".form-head").html(error_send);
						$(".er_msg").show();
						$('.loader-wrapper').hide();
						//$('#preloder').hide();
						
						return false;
					}
					$(".er_msg").hide();
                    if (response.success) {
                        // Handle the response from the server
						console.log(response);
                        var availableRooms = response.data.available_rooms;
                        var totalGuests = response.data.totalguests;
						
						var tax_details = "";
						var gbpRate="";
						
						var checkin = $(".check-in-render").text();
						var checkout = $(".check-out-render").text();
						
						$(".st-list-rooms .fetch").html('');
						
					
						
						console.log("xcv");
						
                        //var tableHtml = '<table border="1"><tr><th>Room Name</th><th>Meal</th><th>Cancellation</th><th>Tax Information</th><th> Prices(Inc Taxes)</th><th>Action</th></tr>';
                        //var tableHtml = '<table border="1"><tr><th>Room Name</th><th>Meal</th><th>Cancellation</th><th> Prices</th><th>Action</th></tr>';
						var currency_code = "";
						var count_item = 0
						var common_msg = 'Taxes not included in the price, to be paid on the spot:';
                        availableRooms.forEach(function(room) {
							//generateGuestFields(totalGuests,adults,children,agesArray)
							var sum_tax = 0;
							var message = '';
							const dailyPrice = room.daily_prices.length > 0 ? room.daily_prices[0] : 'N/A';
							
							var tax_data = room.payment_options.tax_data.taxes
							
							var bathroomCount = room.rg_ext.bathroom;
							var beddingCount = room.rg_ext.bedrooms;
							
							//console.log(bathroomCount);
							//console.log(bathroomCount);
							var commission = 0;
							if (room.payment_options.commission_info.charge.amount_commission){
								//console.log("comm==="+room.payment_options.commission_info.charge.amount_commission)
								commission = parseFloat(room.payment_options.commission_info.charge.amount_commission);
															
							} 
							
							if (room.payment_options &&
								room.payment_options.tax_data
								) {
								//console.log("The path exists and 'taxes' is an array.");
								var actual_amount=0;
							
								if(Array.isArray(room.payment_options.tax_data.taxes)){
								
									
									$.each(room.payment_options.tax_data.taxes, function(index, tax) {
										var tax_name = tax.name;
										tax_name = tax_name.replace('_', " ");
										//tax_name = ucfirst(tax_name);
										//if(tax.name=="city_tax"){
											
											/*if(tax.currency_code!='' || tax.currency_code!="GBP"){
												
												if(currency_code!=tax.currency_code){
													
													$.ajax({
														url: 'https://api.exchangerate-api.com/v4/latest/'+tax.currency_code,
														method: 'GET',
														success: function(data) {
															gbpRate = data.rates.GBP;
															console.log("gbpRate"+gbpRate);
														},
														error: function(error) {
															$('#exchange-rate').text('Error fetching data');
															console.error('Error fetching exchange rate:', error);
														}
													});
													
												}
												
												currency_code = tax.currency_code; 
												
												
											}*/
											
											
											
											setTimeout(function(){  
											
											if(tax.included_by_supplier==false){
												message += "<div class='tax_info_single'><b class='tax_name_single'>"+tax_name+": </b><p class='cur_code'><span>"+tax.currency_code+'</span> <span>'+tax.amount+'</span></p></div>';
											} else{
												//message += 'Taxes not included';
											}
											
											//if(tax.included_by_supplier==false){
												//actual_amount = tax.amount * gbpRate;
												
												//console.log("actual amount"+actual_amount);
											
												//tax_details += tax.name+" = "+currency_code+' '+actual_amount.toFixed(2)+"<br/>";
												
												//console.log(actual_amount.toFixed(2));
												
												//sum_tax += parseFloat(actual_amount.toFixed(2));
											//}
											
																		
												
											}, 2000);
											
											
										//}
										
									});
								}
								
								setTimeout(function(){ 
								
									var show_amount = parseFloat(room.payment_options.show_amount);
									var sum_tax_value = parseFloat(sum_tax);
									
									if(message!=''){
										message = "<p>"+common_msg+"</p>"+message;
									}
									//commission = 0; 
									var room_total = show_amount + sum_tax_value + commission;
									var commission_custom = show_amount * 0.05;
									var room_total_custom = show_amount + commission_custom;
									console.log("newcomm = "+room_total_custom);
									//console.log("show_comm = "+show_amount + "sum_tax_value = "+sum_tax_value + "commission = "+commission);
									//var formatted_room_total = room_total.toFixed(2);
									var formatted_room_total = room_total_custom.toFixed(2);
									
									var get_img = $(".hidden_image_"+count_item).val();
									
									var room_features = room.rg_ext;
									//console.log("bedding"+room.room_name);
									
									
									var bedding = '';
									if(room_features.bedding){
										bedding = room_features.bedding;
									}
									var date_cancel  = room.payment_options.cancellation_penalties.free_cancellation_before;
									var date = new Date(date_cancel);
									// Format the date as 'DD Mon YYYY'
									var day = date.getDate();
									var month = monthNames[date.getMonth()];
									var year = date.getFullYear();
									var formattedDate = day + " " + month + " " + year;
									
									// Format the time as 'HH:MM AM/PM'
									var hours = date.getHours();
									var minutes = date.getMinutes();
									var ampm = hours >= 12 ? 'PM' : 'AM';
									hours = hours % 12;
									hours = hours ? hours : 12; // The hour '0' should be '12'
									minutes = minutes < 10 ? '0'+minutes : minutes;
									var formattedTime = hours + ':' + minutes + ' ' + ampm;
									
									var meal_oringal = room.meal;								
									var stringWithSpaces = meal_oringal.replace(/-/g, ' ');
									var meal = stringWithSpaces.charAt(0).toUpperCase() + stringWithSpaces.slice(1);
									if(meal=="Nomeal"){
										meal="No Meal";
									}
									
									// Combine the formatted date and time
									var formattedDateTime = formattedDate + ' ' + formattedTime;
									
									var cancel_option = room.payment_options.cancellation_penalties.free_cancellation_before ? 'Free cancellation until ' + formattedDateTime : 'No free cancellation';
							
									var newhtml = '<div class="item st-border-radius"><form class="form-booking-inpage" method="get"><input type="hidden" name="check_in" value="'+checkin+'"><input type="hidden" name="check_out" value="'+checkout+'"><input type="hidden" name="room_book_hash" value="'+room.book_hash+'"><input type="hidden" name="room_num_search" value="1"><input type="hidden" name="adult_number" value="'+adults+'"><input type="hidden" name="child_number" value="'+children+'"><input name="action" value="hotel_add_to_cart" type="hidden"><input name="item_id" value="153" type="hidden"><input name="room_id" value="6557" type="hidden"><input type="hidden" name="start" value="07/08/2024"><input type="hidden" name="end" value="07/09/2024"><input type="hidden" name="is_search_room" value="1"><div class="row align-items-center align-items-stretch"><div class="col-12 col-sm-12 col-md-12 col-lg-4"><div class="image"><img src="'+get_img+'" alt="'+ room.room_name +'" class="kb_room_img img-fluid img-full st-hover-grow"></div></div><div class="col-12 col-sm-12 col-md-12 col-lg-8"><div class="row align-items-center"><div class="col-12 col-md-12 col-lg-7"><div class="item-infor"><div class="st-border-right"><h2 class="heading"><a href="" class="heading-title">'+ room.room_name +'                                   </a></h2><p class="cancel_info">'+cancel_option+'</p><div class="facilities"><div class="st-list-facilities"><p class="item text-center" data-bs-html="true" data-bs-toggle="tooltip" data-bs-placement="top" data-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Room Footage"><span class="item-box"><i class="stt-icon-bathtub"></i></span><br><span class="infor">'+bathroomCount+'<sup>2</sup></span></p><p class="item text-center" data-bs-html="true" data-bs-toggle="tooltip" data-bs-placement="top" data-toggle="tooltip" data-placement="top" title="" data-bs-original-title="No. Beds"><span class="item-box"><i class="stt-icon-bed"></i></span><br><span class="infor">'+beddingCount+'</span></p><p class="item text-center" data-bs-html="true" data-bs-toggle="tooltip" data-bs-placement="top" data-toggle="tooltip" data-placement="top" title="" data-bs-original-title="No. Adults"><span class="item-box"><i class="stt-icon-adult"></i></span><br><span class="infor">'+adults+'</span></p><p class="item text-center" data-bs-html="true" data-bs-toggle="tooltip" data-bs-placement="top" data-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Room Footage"><span class="item-box"><i class="fas fa-hamburger"></i></span><br><span class="infor">'+meal+'</span></p></div></div></div></div></div><div class="col-12 col-md-12 col-lg-5"><div class="price-wrapper"><span class="price">'+ currency_sign + formatted_room_total + '</span><span class="unit">                                   </span></div><div class="tax_info_room_ava">'+message+'</div><a href="https://thehotelhub.co.uk/checkout?start='+checkin+'&amp;end='+checkout+'&amp;date='+checkin+'%2012:00%20am-'+checkout+'%2011:59%20pm&amp;room_num_search=1&amp;adult_number='+adults+'&child_count='+children+'&room_hash='+room.book_hash+'&child_age='+child_age+'&data-room=' + encodeURIComponent(JSON.stringify(room)) + '&total_price='+formatted_room_total+'&cancel_option='+cancel_option+'&hotel_img='+get_img+'&tax_amnt='+actual_amount+'&hotel_title='+hotel_name+'&room-name='+room.room_name+'&currency='+room.payment_options.show_currency_code+'&meal='+meal+'&hotel_id='+hotel_id+'&message='+message+'&adddress='+adddress+'&commission='+commission+'" class="show-detail btn-v2 btn-primary">Book Now </a></div></div></div></div></form></div>';
						
									$(".st-list-rooms .fetch").append(newhtml);
									count_item++;
									
									if ($(window).width() <= 992) {
										$(".fixed-on-mobile").hide(); 
									}
								}, 2000);							
								$('.loader-wrapper').hide();
								
								//$('#preloder').hide();
							} else {
								
								$('.loader-wrapper').hide();
								$(".er_msg").hide();
								console.log("The path does not exist or 'taxes' is not an array.");
							}
							
                           
							
                        });
						setTimeout(function(){ 
							$('html, body').animate({
								scrollTop: $(".st-list-rooms").offset().top
							}, 800);
						}, 2100);
                    } else {
                        $('#availability_results').html('<p>' + response.data.message + '</p>');
                    }
					$(".ava_error").text("");
					$('.loader-wrapper').hide();
					
					$(".er_msg").hide();
                },
                error: function(error) {                   
                    $('.loader-wrapper').hide();
                    alert('There was an error checking availability');
					
                    console.log(error);
                }
            });
        }
    });
	
	//for popup guest form fill
	
	$(document).on('click', '.payment_btn', function() {
		
		const formData = $('#cc-form').serialize();
		$('.loader-wrapper').show();
		var email = $('#field-st_email').val();
		var phone = $('#field-st_phone').val();
		var checkin = $(".date-in").val();
		var checkout = $(".date-out").val();
		var room_name = $(".room-name").val();
		
		var cancel_option = $(".cancel_option").val();
		var hotel_name = $(".checkout_hotel_name").text();

		console.log("2222");
		
        $('#shortcodecontainer').empty();
		isValid = true;
		//$(".top_mn_section").css("position","1");
		
		$('#cc-form input[type="text"]').each(function() {
			if ($(this).val() === '') {
				isValid = false;
				console.log("636363"); 
				$(".alert").text("All fields are required");
				$(".alert").removeClass("hidden");
				$(".alert").addClass("alert-danger");
				$('.loader-wrapper').hide();
				return false;
			}
		});
		 
		$('#cc-form input[type="email"]').each(function() {
			if ($(this).val() === '') {
				isValid = false;
				console.log("inside"); 
				$(".alert").text("All fields are required");
				$(".alert").removeClass("hidden");
				$(".alert").addClass("alert-danger");
				$('.loader-wrapper').hide();
				//$('#preloder').hide();
				return false;
			}
		});

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		
		if (!emailRegex.test(email)) {         
			$(".alert").text("Please enter a valid email address.");
			$(".alert").removeClass("hidden");
			$(".alert").addClass("alert-danger");
			$('.loader-wrapper').hide();
			//$('#preloder').hide();
            isValid = false;
			return false;
        }

		if(isValid){
			$(".form_error").text("");
			console.log("ddhere");
			var roomData = $("#roomData").val();

			const guests = [];

			console.log(formData+"==========sformData");
			
			var formDataObj = {};
			
			formData.split('&').forEach(function(pair) {
				var [key, value] = pair.split('=');
				formDataObj[decodeURIComponent(key)] = decodeURIComponent(value);
			});
		
			$(".close").trigger("click");
			$(".error_list").hide();
			$("div#availability_results").css("z-index","1");
			$(".top_mn_section").css("position","relative");
			var room_total_price = $(".room_total_price").val();
			var totalGuests = $("#totalGuests").val();
			var hotel_title = $(".hotel_title").text();
			var checkout_hotel_image = $(".checkout_hotel_image").attr("src");
			var adddress = $(".room_address").val(); 
			var today_date = $(".today_date").val(); 
			const booking_info = {
				"checkin": checkin,
				"checkout": checkout,
				"no_of_guests": totalGuests,
				"total_price": room_total_price,
				"hotel_title": hotel_name,
				"room_name": room_name,
				"checkout_hotel_image": checkout_hotel_image,
				"address": adddress,
				"today_date": today_date,
				"cancel_option": cancel_option,
				"room_total_price": room_total_price,
			};
			var jsonString = JSON.stringify(booking_info);
			
			$.ajax({
				type: 'POST',
				url: myAjax.ajaxurl,
				data: {
					action: 'select_room',
					guests: formDataObj,
					booking_info: booking_info,
					//room_data: room,
					booking_price:room_total_price,
					security: myAjax.security 
				},
				success: function(response) {
					//$('#loader').hide();
					$('.loader-wrapper').hide();
					//$('#preloder').hide();

					if (response.success) {
						$(".room_details_main_div").hide();
						$(".room_sidebar").hide();
						$(".top_mn_section").hide();
						$(".hp-room-section").hide();
						$("#after_bookin_option").show();
				
						console.log(formDataObj);
			
						var totalGuests = $("#totalGuests").val();
						
						$(".gu_count").text(totalGuests);
						$(".bed_type").text(room_name);
						$(".chk_in").text(checkin);
						$(".chk_out").text(checkout);
						$(".payment-gateway").html('');
						$('.payment-gateway-st_paypal').html(response.data.real_data.shortcode); 
						$('.payment-gateway-st_paypal').css('display', 'block').css('cssText', 'display: block !important');
						$('.page-template-template-checkout-php .payment-form .title').show();
						$('html, body').animate({
							scrollTop: $(".page-template-template-checkout-php .payment-form .title").offset().top
						}, 800);
						$(".alert").addClass("hidden");
						$(".alert").removeClass("alert-danger");
					} else {
						if(response.data.error){
							alert('Error: ' + response.data.error);
						}
						if(response.data.message){
							alert('Error: ' + response.data.message);
						}
						
						$(".alert").addClass("hidden");
						$(".alert").removeClass("alert-danger");
					}
				},
				error: function(error) {
					//$('#loader').hide();
					$('.loader-wrapper').hide();
					//$('#preloder').hide();
					alert('There was an error selecting the room');
					$(".alert").addClass("hidden");
					$(".alert").removeClass("alert-danger");
					console.log(error);
				}
			});
		}
        
		
	});
	
	//select room availability

	$('#availability_results').on('click', '.select-room', function() {
		
		$("div#availability_results").css("z-index","-1");
		$(".top_mn_section").css("position","static");
		$('#selectRoomModal').modal('show');
        var roomData = $(this).data('room'); 

		var price_total = $(this).attr("total_price");
		var can_option = $(this).attr("booking_option");
		
		$(".can_option").text(can_option);
		
		$(".root_price").text(price_total);
		
		$("#root_total_price").val(price_total);
		
		//console.log(ag);
		$('#roomData').val("");
		$('#roomData').val(roomData);  
		
        var numGuests = 2;
       
    });
	
	$('#selectRoomModal').on('click', '.close', function() {
		$("div#availability_results").css("z-index","1");
		$(".top_mn_section").css("position","relative");
	});
	
	
	function generateGuestFields(totalGuests,adults,children,ageArray) {
		//console.log("vvbbvv");
        var dynamicForm = $('#dynamicForm');
        dynamicForm.empty(); // Clear previous fields
	
		//console.log(ageArray+"ageArray");
        var inputroomdata =`<input type="hidden" value="" id="roomData" name="roomData" >`;
        var totalGuestsdata =`<input type="hidden" value="${totalGuests}" id="totalGuests" name="totalGuests" >`;
        var adultsdata =`<input type="hidden" value="${adults}" id="adults" name="adults" >`;
        var childrendata =`<input type="hidden" value="${children}" id="children" name="children" >`;
        var room_total =`<input type="hidden" value="" id="root_total_price" name="root_total_price" >`;
        //var can_opt =`<input type="hidden" value="" id="can_opt" name="can_opt" >`;
      
        dynamicForm.append(inputroomdata);
        dynamicForm.append(totalGuestsdata);
        dynamicForm.append(adultsdata);
        dynamicForm.append(childrendata); 
        dynamicForm.append(room_total); 
        //dynamicForm.append(can_opt); 
		
		var user_info = `
                <div class="form-group">
                    <label for="FirstName">First Name</label>
                    <input type="text" class="form-control" id="first_name" name="first_name" placeholder="First Name">
                </div>
                <div class="form-group">
                    <label for="guestLastName">Last Name</label>
                    <input type="text" class="form-control" id="last_name" name="last_name" placeholder="Last name">
                </div> 

				 <div class="form-group">
                    <label for="email">Email</label>
                    <input type="text" class="form-control" id="email" name="email" placeholder="Email">
                </div> 
				
				<div class="form-group">
                    <label for="phone">Phone Number</label>
                    <input type="text" class="form-control" id="phone" name="phone" placeholder="phone">
                </div> 
				
            `;
            dynamicForm.append(user_info);
			
		
		
		
		
		if(adults>1){
			for (var i = 1; i < adults; i++) {
				var guestFields = `
					<h4>Guest Information</h4>
					<div class="form-group">
						<label for="guestFirstName${i}">First Name</label>
						<input type="text" class="form-control" id="guestFirstName${i}" name="guestFirstName${i}" placeholder="Enter guest first name">
					</div>
					<div class="form-group">
						<label for="guestLastName${i}">Last Name</label>
						<input type="text" class="form-control" id="guestLastName${i}" name="guestLastName${i}" placeholder="Enter guest last name">
					</div>
					
					
				`;
				dynamicForm.append(guestFields);

				// Add change event listener to toggle child age input visibility
				
			}
		}
		
		// for childs
		//console.log(generateGuestFields+"  == generateGuestFields");
		
		if(children>=1){
			for (var i = 1; i <= children; i++) {
				var child_age = ageArray[i-1];
				var childInfo = `
					<h4>Child Information</h4>
					<div class="form-group">
						<label for="guestFirstName${i}">First Name</label>
						<input type="text" class="form-control" id="childFirstName${i}" name="childFirstName${i}" placeholder="Enter Child first name">
					</div>
					<div class="form-group">
						<label for="guestLastName${i}">Last Name</label>
						<input type="text" class="form-control" id="childLastName${i}" name="childLastName${i}" placeholder="Enter Child last name">
					</div>
					
					<div class="form-group childAge" id="childAgeGroup${i}">
						<label for="childAge${i}">Child Age</label>
						<input type="number" class="form-control" id="childAge${i}" name="childAge${i}" value="${child_age}" placeholder="ffEnter child age" min="1">
					</div>
					
				`;
				dynamicForm.append(childInfo);
				
				(function(i) {
					$('#isChild' + i).change(function() {
						if ($(this).is(':checked')) {
							$('#childAgeGroup' + i).show();
						} else {
							$('#childAgeGroup' + i).hide();
						}
					});
				})(i);

			}
		}
		
    }
});
 jQuery(document).ready(function($){
    // submit search
    $('#hawk-search-submit').on('click', function(e){
        e.preventDefault();
        var $form = $('#hawk-search-form');

        var data = {
            action: 'hawk_search',
            nonce: $('input[name="hotel_search_nonce_field"]').val(),
            destination: $('#hawk_destination').val(),
            checkin: $('#hawk_checkin').val(),
            checkout: $('#hawk_checkout').val(),
            adults: $('#hawk_adults').val(),
            children: $('#hawk_children').val(),
            page: 1
        };

        $('#hawk-search-results').html('<p>Searching…</p>');

        $.post(myAjax.ajaxurl, data, function(res){
            if(res.success){
                $('#hawk-search-results').html(res.data.html);
            } else {
                $('#hawk-search-results').html('<p>'+ (res.data && res.data.message ? res.data.message : 'Search failed') +'</p>');
            }
        });
    });

    // pagination (delegated)
    $('#hawk-search-results').on('click', '.hawk-search-page', function(e){
        e.preventDefault();
        var page = $(this).data('page');
        var data = {
            action: 'hawk_search',
            nonce: $('input[name="hotel_search_nonce_field"]').val(),
            destination: $('#hawk_destination').val(),
            checkin: $('#hawk_checkin').val(),
            checkout: $('#hawk_checkout').val(),
            adults: $('#hawk_adults').val(),
            children: $('#hawk_children').val(),
            page: page
        };
        $('#hawk-search-results').html('<p>Loading page '+page+'…</p>');
        $.post(myAjax.ajaxurl, data, function(res){
            if(res.success){
                $('#hawk-search-results').html(res.data.html);
            } else {
                $('#hawk-search-results').html('<p>'+ (res.data && res.data.message ? res.data.message : 'Load failed') +'</p>');
            }
        });
    });

    // Click "Check availability" - delegated so it works for AJAX results
    $('#hawk-search-results').on('click', '.hawk-check-availability', function(e){
        e.preventDefault();
        var hotelId = $(this).data('hotel-id');

        // read values from form to pass to your existing PHP handler
        var start = $('#hawk_checkin').val();
        var end = $('#hawk_checkout').val();
        var adults = $('#hawk_adults').val();
        var children = $('#hawk_children').val();

        // If user uses a datepicker other format adjust to d/m/Y. The form placeholder is dd/mm/yyyy.
        // Your server expects d/m/Y; ensure inputs are that format. If not, adapt here.
        var formData = $.param({
            start: start,
            end: end,
            hotel_id: hotelId,
            adult_number: adults,
            child_number: children
            // add child_age_field[]=x if you support children ages
        });

        $.ajax({
            url: myAjax.ajaxurl,
            type: 'POST',
            data: {
                action: 'check_availability',
                security: myAjax.security,
                form_data: formData
            },
            beforeSend: function(){
                // optional: show loading indicator
            },
            success: function(resp){
                if(resp.success){
                    // resp.data.available_rooms contains the rates array (as your PHP returns)
                    // show a simple modal / or insert into DOM
                    var out = '<h3>Available rooms</h3>';
                    $.each(resp.data.available_rooms, function(i, room){
                        out += '<div class="hawk-room">';
                        out += '<h4>'+ (room.room_name || 'Room') +'</h4>';
                        out += '<p>Meal: ' + (room.meal || '') + '</p>';
                        out += '<p>Allotment: ' + (room.allotment || '') + '</p>';
                        out += '<p><button class="hawk-select-room" data-book-hash="'+room.book_hash+'" data-match-hash="'+room.match_hash+'" data-room-name="'+room.room_name+'">Book this room</button></p>';
                        out += '</div>';
                    });
                    $('#hawk-search-results').prepend('<div class="hawk-availability-results">'+out+'</div>');
                } else {
                    alert(resp.data && resp.data.message ? resp.data.message : 'No availability');
                }
            },
            error: function(){
                alert('Availability check failed');
            }
        });
    });

    // handle click to "select" room (delegated)
    $('#hawk-search-results').on('click', '.hawk-select-room', function(e){
        e.preventDefault();
        var bookHash = $(this).data('book-hash');
        var matchHash = $(this).data('match-hash');
        var roomName = $(this).data('room-name');

        // Build user info and booking_info as expected by your handle_select_room
        // For demo we only pass minimal structure. You should build full structure required by your API.
        var userInfo = {
            'booking_hash': bookHash,
            'room-name': roomName,
            'room_total_price': 0.00 // We don't know price here; ideally show price from API daily_prices
        };

        // Also you had another param 'booking_info' — adjust if necessary.
        var ajaxData = {
            action: 'select_room',
            security: myAjax.security,
            guests: userInfo,
            booking_info: {} // if you have extra data
        };

        $.ajax({
            url: myAjax.ajaxurl,
            type: 'POST',
            data: ajaxData,
            success: function(resp){
                if(resp.success){
                    // the PHP returns 'shortcode' in response — it's ready-to-insert HTML (paypal button)
                    // open thank-you redirect will happen after payment. For now show returned shortcode content
                    $('#hawk-search-results').html('<div class="hawk-booking-result">' + resp.data.real_data.shortcode + '</div>');
                } else {
                    alert(resp.data && resp.data.message ? resp.data.message : 'Failed to select room');
                }
            },
            error: function(){
                alert('Failed to contact server');
            }
        });
    });
});
