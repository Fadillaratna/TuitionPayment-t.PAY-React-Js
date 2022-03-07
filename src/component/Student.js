import React from 'react';
import $ from "jquery";
import "./student.css";
import { Modal } from 'bootstrap';

class Student extends React.Component {
    constructor() {
        super();
        this.state = {
            siswa: [
                { nis: "001", nama: "Elmira Aireen", alamat: "Jl Laksajaya 101, Tangerang" },
                { nis: "002", nama: "Alaska Vanhouve", alamat: "Jl Sanskerta Raya 27, Surabaya" },
                { nis: "003", nama: "Beby Tsaveena", alamat: "Jl Grandheev 56 E, Jakarta Selatan" },
            ],
            nis: "",
            nama: "",
            alamat: "",
            action: ""
        }
    }

    bind = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    SaveSiswa = (event) => {
        event.preventDefault();
        let temp = this.state.siswa;

        if (this.state.action === "insert") {
            temp.push({
                nis: this.state.nis,
                nama: this.state.nama,
                alamat: this.state.alamat
            });
        } else if (this.state.action === "update") {
            let index = temp.findIndex(item => item.nis === this.state.nis);
            temp[index].nama = this.state.nama;
            temp[index].alamat = this.state.alamat;
        }

        this.setState({ siswa: temp });
        $("#modal").modal('hide');
    }

    Add = () => {
        this.setState({
            nis: "",
            nama: "",
            alamat: "",
            action: "insert"
        });
    }

    Edit = (item) => {
        this.setState({
            nis: item.nis,
            nama: item.nama,
            alamat: item.alamat,
            action: "update"
        });
    }

    Drop = (index) => {
        // beri konfirmasi untuk menghapus data
        if (window.confirm("Apakah anda yakin ingin menghapus data siswa ini?")) {
            // menghapus data
            let temp = this.state.siswa;
            // hapus data
            temp.splice(index, 1);
            this.setState({ siswa: temp });
        }
    }

    searching = event => {
        if (event.keyCode === 13) {
            // 13 adalah kode untuk tombol enter
            let keyword = this.state.keyword.toLowerCase()
            let tempSiswa = this.state.siswa
            let result = tempSiswa.filter(item => {
                return item.nis.toLowerCase().includes(keyword) ||
                    item.nama.toLowerCase().includes(keyword) ||
                    item.alamat.toLowerCase().includes(keyword)
            })
            this.setState({ siswa: result })
        }
    }

    render() {
        return (
            <div className="siswa">
                <div className="dashboard ms-5"><br></br><br></br>
                    <br></br><br></br><br></br>
                    <h5 className="card-title display-3 fw-bolder mb-0">STUDENT LIST</h5>
                    <p className="card-text lead fs-2 mb-3">t.PAY</p>
                    <button type="button" className="btn btn-dark mb-5" onClick={this.Add} data-toggle="modal" data-target="#modal">Add Student</button>

                    <input type="text" className="form-control my-2" placeholder="Search Student" value={this.state.keyword} onChange={ev => this.setState({ keyword: ev.target.value })} onKeyUp={ev => this.searching(ev)} /> 
                    <br />
                    <ul className="list-group mb-lg-0">
                        {this.state.siswa.map((item, index) => {
                            return (
                                <li className="list-group-item flush" key={index}>
                                    <h5>{item.nama}</h5>
                                    <h6>NIS: {item.nis}</h6>
                                    <h6>Address: {item.alamat}</h6>
                                    <button className="btn btn-dark m2 me-2" onClick={() => this.Edit(item)} data-toggle="modal" data-target="#modal">Edit</button>
                                    <button className="btn btn-outline-dark m1" onClick={() => this.Drop(index)}> Delete </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
               

                <div className="modal fade" id="modal" >
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header"> 
                                <h4 class="modal-title">Student Data</h4>
                                <button type="button" class="btn-close" data-dismiss="modal"></button>
                            </div>
                            <div class="modal-body">
                            <form onSubmit={this.SaveSiswa}>
                                NIS
                                <input type="text" name="nis" className="form-control mb-2" onChange={this.bind} value={this.state.nis} required />
                                Name
                                <input type="text" name="nama" className="form-control mb-2" onChange={this.bind} value={this.state.nama} required />
                                Address
                                <input type="text" name="alamat" className="form-control mb-2" onChange={this.bind} value={this.state.alamat} required />
                                <br></br>
                                <button className="btn-dark" type="submit">Save</button>
                            </form>
                            <br></br>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        )
    }
}

export default Student;