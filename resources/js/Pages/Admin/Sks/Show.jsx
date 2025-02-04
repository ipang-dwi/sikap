//import react
import React, { useState } from "react";

//import layout
import LayoutAccount from "../../../Layouts/Admin";

//import Head, usePage
import { Head, Link, usePage } from "@inertiajs/inertia-react";

//import Inertia adapter
import { Inertia } from "@inertiajs/inertia";

//import Sweet Alert
import Swal from "sweetalert2";

//import component pagination
import Pagination from "../../../Shared/Pagination";

import Delete from "../../../Shared/Delete";

export default function SksShow() {
    const { errors, biodatas, sks } = usePage().props;

    console.log(sks);
    const [biodatasData, setBiodataData] = useState([]);

    //define method "handleCheckboxChange"
    const handleCheckboxChange = (e) => {
        //define data
        let data = biodatasData;

        //push data on state
        data.push(e.target.value);

        //set data to state
        setBiodataData(data);
    };

    //method storeImage
    const storeTransaction = async (e) => {
        e.preventDefault();

        //sending data
        Inertia.post(
            "/admin/sks/store_transaction",
            {
                //data
                sk_id: sks.id,
                biodata_id: biodatasData,
            },
            {
                onSuccess: () => {
                    //show alert
                    Swal.fire({
                        title: "Success!",
                        text: "Data saved successfully!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                    });

                    //set state to null
                    setImage(null);
                    setColorID("");
                },
            }
        );
    };

    return (
        <>
            <Head>
                <title>Create SK - SIKAP</title>
            </Head>
            <LayoutAccount>
                <Link
                    href="/admin/sks"
                    className="btn btn-md btn-primary border-0 shadow"
                    type="button"
                >
                    <i className="fa fa-long-arrow-alt-left me-2"></i>
                    Kembali
                </Link>
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-success">
                            <div className="card-header">
                                <span className="font-weight-bold">
                                    <i className="fa fa-users"></i> Add
                                    Transaction SK : <strong>{sks.name}</strong>
                                </span>
                            </div>
                            <div className="card-body">
                                <form onSubmit={storeTransaction}>
                                    <div className="mb-3">
                                        <label className="fw-bold">Nama Biodata</label>
                                        <br />
                                        {biodatas.map((biodata, index) => (
                                            <div
                                                className="form-check form-check-inline"
                                                key={index}
                                            >
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value={biodata.id}
                                                    onChange={
                                                        handleCheckboxChange
                                                    }
                                                    id={`check-${biodata.id}`}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor={`check-${biodata.id}`}
                                                >
                                                    {biodata.name}
                                                </label>
                                            </div>
                                        ))}

                                        {errors.biodata_id && (
                                            <div className="alert alert-danger mt-2">
                                                {errors.biodata_id}
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="btn btn-md btn-success me-2"
                                        >
                                            <i className="fa fa-save"></i> Save
                                        </button>
                                        <button
                                            type="reset"
                                            className="btn btn-md btn-warning"
                                        >
                                            <i className="fa fa-redo"></i> Reset
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-2 mb-4">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-success">
                            <div className="card-header">
                                <span className="font-weight-bold">
                                    <i className="fa fa-hospital"></i> Biodata SK
                                </span>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered table-striped table-hovered">
                                        <thead>
                                            <tr>
                                                <th
                                                    scope="col"
                                                    style={{ width: "5%" }}
                                                >
                                                    No.
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "15%" }}
                                                >
                                                    Nama
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "15%" }}
                                                >
                                                    Nik
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "15%" }}
                                                >
                                                    No HP
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "15%" }}
                                                >
                                                    No Rekening
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "15%" }}
                                                >
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {sks.sktransactions.data.map((sk, index) => (
                                                <tr key={index}>
                                                    <td className="text-center">
                                                            {++index +
                                                                (sks
                                                                    .sktransactions
                                                                    .current_page -
                                                                    1) *
                                                                    sks
                                                                        .sktransactions
                                                                        .per_page}
                                                        </td>
                                                    <td>{sk.biodata.name}</td>
                                                    <td>{sk.biodata.nik}</td>
                                                    <td>{sk.biodata.nohp}</td>
                                                    <td>{sk.biodata.norek}</td>
                                                    <td className="text-center">
                                                            <Delete
                                                                URL={
                                                                    "/admin/sks/destroy_transaction"
                                                                }
                                                                id={sk.id}
                                                            />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <br />
                                <Pagination
                                    links={sks.sktransactions.links}
                                    align={"end"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAccount>
        </>
    );
}
