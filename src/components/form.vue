<template>
	<div class="p-5">
		<div class="container">
			<div class="row">
				<div class="col-md-8 col-sm-10 col-12 mx-auto " v-if="back">
					<h1 class="text-center"> Primary passenger</h1>
					<ValidationObserver v-slot="{ handleSubmit }">
						<form @submit.prevent="handleSubmit(onSubmit)">
							<validation-provider name="Full Name" :bails="false" rules="required" v-slot="{ errors, classes }">
								<div :class="classes ">
									<div class="form-group">
										<input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Full Name" v-model="Name" />
										<span class="span">{{errors[0] }}</span>
									</div>
								</div>
							</validation-provider>
							<validation-provider name="Age" :bails="false" rules="required|integer" v-slot="{ errors, classes }">
								<div :class="classes ">
									<div class="form-group">
										<input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Age" v-model="age" />
										<span class="span">{{errors[0] }}</span>
									</div>
								</div>
							</validation-provider>
							<validation-provider name="Email" :bails="false" rules="required|email" v-slot="{ errors, classes }">
								<div :class="classes ">
									<div class="form-group">
										<input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Email" v-model="email" />
										<span class="span">{{errors[0] }}</span>
									</div>
								</div>
							</validation-provider>
							<validation-provider name="Address " :bails="false" rules="required" v-slot="{ errors, classes }">
								<div :class="classes ">
									<div class="form-group">
										<input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Address " v-model="Address" />
										<span class="span">{{errors[0] }}</span>
									</div>
								</div>
							</validation-provider>
							<validation-provider name="Phone Number" :bails="false" rules="required|integer" v-slot="{ errors, classes }">
								<div :class="classes ">
									<div class="form-group">
										<input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Phone Number" v-model="Phone" />
										<span class="span">{{errors[0] }}</span>
									</div>
								</div>
							</validation-provider>
							<div class="text-center">
								<button type="submit" class="btn btn-reg"> Next</button>
							</div>
						</form>
					</ValidationObserver>
				</div>
				<div class="col-md-8 col-sm-10 col-12 mx-auto " v-if='next'>
					<h1 class="text-center"> SECONDARY PASSENGER </h1>
					<ValidationObserver v-slot="{ handleSubmit }">
						<form @submit.prevent="handleSubmit(BeforeSubmit)">
							<div class="form-group">

								<validation-provider name="Full Name" :bails="false" rules="required" v-slot="{ errors, classes }">
									<div :class="classes ">
										<input type="text" class="form-control" placeholder="Full Name" v-model="Sec_name" />
										<span class="span">{{errors[0] }}</span>
									</div>
								</validation-provider>

							</div>
							<div class="form-group">

								<validation-provider name="Age" :bails="false" rules="required|integer" v-slot="{ errors, classes }">
									<div :class="classes ">
										<input type="text" class="form-control" placeholder="Age" v-model="Sec_age" />
										<span class="span">{{errors[0] }}</span>
									</div>
								</validation-provider>

							</div>

							<div class="row">
								<div card class="col-md-4" v-for="(sec, i) in SECONDARY_PASSENGER" :key="i">
									<div class="card-body">
										<h3 class="text-gray p-0 mb-2">{{ sec.name }}</h3>
										<h6>
											{{sec.age }}
										</h6>
										<a href="javascript:void(0)" class="btn-danger p-1  rounded card-link" @click="remove(i)">
											<i class="far fa-times-circle"></i>
										</a>

									</div>
								</div>
							</div>

							<button type="submit" class="btn btn-reg my-5">
								Add
								<strong> + </strong>
							</button>
						</form>
					</ValidationObserver>
					<div class="d-flex justify-content-between">
						<button class="btn btn-reg" @click="bac()">Back </button>
						<button class="btn btn-reg" @click="Submit()">Submit </button>
					</div>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				Phone: '',
				email: '',
				Address: '',
				Name: '',
				age: '',
				Sec_name: '',
				Sec_age: '',
				back: true,
				next: false,
				SECONDARY_PASSENGER: []
			}
		},
		methods: {
			bac() {
				this.next = false
				this.back = true
			},
			onSubmit() {
				this.next = true
				this.back = false
			},
			Submit() {
				this.$router.push({ name: 'thank' })
			},
			BeforeSubmit() {
				let secPerson = {
					name: this.Sec_name,
					age: this.Sec_age
				}
				this.SECONDARY_PASSENGER.push(secPerson)
				this.Sec_name = ''
				this.Sec_age = ''
			},
			remove(index) {
				this.SECONDARY_PASSENGER.splice(index, 1)
			}
		}
	}
</script>

<style lang="scss">
	form {
		.form-group {
			margin-bottom: 30px !important;
			input,
			select,
			textarea {
				border: 0;
				border-bottom: 1px solid #111;
				border-radius: 0;
				height: 50px;
				color: #111;
				padding: 0;
				&:focus {
					border-bottom: 1px solid #111;
					box-shadow: none;
					outline: none;
				}
				&::placeholder {
					color: #111;
				}
			}
			textarea {
				height: 210px;
				resize: none;
			}
			select {
				transition: 0.2s;
				-webkit-appearance: inherit;
				cursor: pointer;
			}
		}
	}
	.btn-reg {
		background-color: #21386d !important;
		color: #fff !important;
		padding: 0 4%;
		text-align: center;
		padding: 10px 25px !important;
		&:focus {
			box-shadow: none !important;
		}
		&:hover {
			background-color: #21386d38 !important;
			color: #213885 !important;

			transition: 1.2s all;
		}
	}
	.span {
		color: red;
		font-size: 12px;
	}
	h1 {
		color: #21386d;
	}
	h3 {
		color: #21386d;
	}
	h5 {
		color: #21386d;
	}
</style>
