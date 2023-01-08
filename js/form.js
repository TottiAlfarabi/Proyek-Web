let vm = new Vue({
    el: "#app",
    data: {
        formulir: null,
        nama:null,
        tglLahir:null,
        tempatLahir:null,
        agama:null,
        umur:null,
        jenisKelamin:null,
        tahunLulus:null,
        namaSekolahAsal:null,
        nisn:null,
        email:null,
        nohp:null,
        namaAyah:null,
        pekerjaanAyah:null,
        bekerjaSebagaiAyah:null,
        penghasilanAyah:null,
        nohpAyah:null,
        namaIbu:null,
        pekerjaanIbu:null,
        bekerjaSebagaiIbu:null,
        penghasilanIbu:null,
        nohpIbu:null

    },
    created: function(){
        this.tampilForm()
    },
    methods: {
        tampilForm: function(){
            axios
            .get('https://api-sekolah.vercel.app/sekolah')
            .then(response=>{
                console.log(response)
                this.formulir=response.data
            })
            .catch(error=>{
                console.log(error)
            })
        },
        simpanForm: function(){
            
            let _data={
                'nama':this.nama,
                'tglLahir':this.tglLahir,
                'tempatLahir':this.tempatLahir,
                'agama':this.agama,
                'umur':this.umur,
                'jenisKelamin':this.jenisKelamin,
                'tahunLulus':this.tahunLulus,
                'namaSekolahAsal':this.namaSekolahAsal,
                'nisn':this.nisn,
                'email':this.email,
                'nohp':this.nohp,
                'namaAyah':this.namaAyah,
                'pekerjaanAyah':this.pekerjaanAyah,
                'bekerjaSebagaiAyah':this.bekerjaSebagaiAyah,
                'penghasilanAyah':this.pekerjaanAyah,
                'nohpAyah':this.nohpAyah,
                'namaIbu':this.namaIbu,
                'pekerjaanIbu':this.pekerjaanIbu,
                'bekerjaSebagaiIbu':this.bekerjaSebagaiIbu,
                'penghasilanIbu':this.penghasilanIbu,
                'nohpIbu':this.nohpIbu

            }
            axios
            .post('https://api-sekolah.vercel.app/sekolah', _data)
            .then(response=>{
                this.tampilForm();
                console.log("tombol ditekan")
            })
            .catch(error=>{
                console.log(error)
            })

        }
    }

})
