import React from "react";

import ReactDataGrid from '@inovua/reactdatagrid-community';
import '@inovua/reactdatagrid-community/index.css';

// reactstrap components
import {  
  Container,
  Row,
  Col
} from "reactstrap";


const filterDonorValue = [
  { name: 'NAME', operator: 'contains', type: 'string', value: '' },
  { name: 'AMOUNT', operator: 'gte', type: 'number', value: '' },
  { name: 'PLACE', operator: 'contains', type: 'string', value: '' },
  { name: 'DATE', operator: 'after', type: 'date', value: '' },
  { name: 'RECEIPT', operator: 'after', type: 'string', value: '' },
];
// core components
const donorsColumns = [
  { name: "SNO", header: "Sno", minWidth: 70, defaultFlex: 1 },
  { name: "NAME", header: "Name", minWidth: 500, defaultFlex: 1, render: ({ data }) => data.TITLE + ' ' + data.SURNAME + ' ' + data.NAME, type: 'string' },
  { name: "PLACE", header: "Place", minWidth: 150, defaultFlex: 1 },
  { name: "AMOUNT", header: "Amount", minWidth: 120, defaultFlex: 1, type: 'number' },
  { name: "DATE", header: "Date", minWidth: 120, defaultFlex: 1, type: 'date' },
  { name: "RECEIPT", header: "Receipt No.", minWidth: 120, maxWidth: 1000, defaultFlex: 1 },
];
// define grid styles here
const gridStyle = { minHeight: 550 };
// define tabular data here
const dataSource = [
  {
    "SNO": "1",
    "TITLE": "Shri. Dr.",
    "SURNAME": "Deevi",
    "NAME": "Sarangapani Iyengar ,  Parthasarathi and Late Sridhar ",
    "PLACE": "Nacharam",
    "AMOUNT": "₹ 3,50,000",
    "DATE": "",
    "RECEIPT": "8/199, 9/204"
  },
  {
    "SNO": "2",
    "TITLE": "Kum.",
    "SURNAME": "Peddinti",
    "NAME": "SuryaVarchasvi d/o P Gopala Charyulu",
    "PLACE": "SankarNagar",
    "AMOUNT": "₹ 3,30,000",
    "DATE": "27/10/2018",
    "RECEIPT": "16/377"
  },
  {
    "SNO": "3",
    "TITLE": "Shri.",
    "SURNAME": "Sribhashyam",
    "NAME": "Pavan kumar ",
    "PLACE": "Texas(USA)",
    "AMOUNT": "₹ 3,00,000",
    "DATE": "",
    "RECEIPT": "13/310"
  },
  {
    "SNO": "4",
    "TITLE": "Shri.",
    "SURNAME": "Sribhashyam",
    "NAME": "Mohanacharyulu",
    "PLACE": "Alwal",
    "AMOUNT": "₹ 1,50,000",
    "DATE": "",
    "RECEIPT": "7/153, 7/158"
  },
  {
    "SNO": "5",
    "TITLE": "Shri.",
    "SURNAME": "Sribhashyam",
    "NAME": "Ananthacharyulu",
    "PLACE": "BHEL",
    "AMOUNT": "₹ 1,00,116",
    "DATE": "",
    "RECEIPT": "8/176"
  },
  {
    "SNO": "6",
    "TITLE": "Shri.",
    "SURNAME": "Narayanam",
    "NAME": "Bhava Prasad",
    "PLACE": "Alwal",
    "AMOUNT": "₹ 1,00,000",
    "DATE": "",
    "RECEIPT": "7/151"
  },
  {
    "SNO": "7",
    "TITLE": "Shri.",
    "SURNAME": "Sribhashyam",
    "NAME": "Anantha Srinivasacharyulu",
    "PLACE": "Alwal",
    "AMOUNT": "₹ 1,00,000",
    "DATE": "",
    "RECEIPT": "7/154, 7/156"
  },
  {
    "SNO": "8",
    "TITLE": "Shri.",
    "SURNAME": "Paramkusam",
    "NAME": "Seetharaamacharyulu",
    "PLACE": "Moulali",
    "AMOUNT": "₹ 1,00,000",
    "DATE": "",
    "RECEIPT": "5/101, 9/206"
  },
  {
    "SNO": "9",
    "TITLE": "Shri.",
    "SURNAME": "",
    "NAME": "S.Venkatacharyulu",
    "PLACE": "Mauritus",
    "AMOUNT": "₹ 1,00,000",
    "DATE": "",
    "RECEIPT": ""
  },
  {
    "SNO": "10",
    "TITLE": "Shri.",
    "SURNAME": "Deevi",
    "NAME": "Raghava Deekshitulu & Sons",
    "PLACE": "Tirupati(USA)",
    "AMOUNT": "₹ 1,00,000",
    "DATE": "",
    "RECEIPT": ""
  },
  {
    "SNO": "11",
    "TITLE": "Shri. Dr.",
    "SURNAME": "Rompicherla",
    "NAME": "Srinivasa Deekshithulu",
    "PLACE": "Vivekananda nagar",
    "AMOUNT": "₹ 1,00,000",
    "DATE": "",
    "RECEIPT": "17/401"
  },
  {
    "SNO": "12",
    "TITLE": "Shri.",
    "SURNAME": "Agnihotram",
    "NAME": "Sanath Kumar",
    "PLACE": "Tirupati ",
    "AMOUNT": "₹ 1,00,000",
    "DATE": "",
    "RECEIPT": ""
  },
  {
    "SNO": "13",
    "TITLE": "Shri Dr.",
    "SURNAME": "Ganjam",
    "NAME": "Krishna Prasad in Memory of  his Father and Mother ",
    "PLACE": "Lalaguda , Tarnaka",
    "AMOUNT": "₹ 1,00,000",
    "DATE": "29/08/2015",
    "RECEIPT": "11/268"
  },
  {
    "SNO": "14",
    "TITLE": "Shri Dr.",
    "SURNAME": "Narayanam",
    "NAME": "KesavaMurthy",
    "PLACE": "Boduppal",
    "AMOUNT": "₹ 60,000",
    "DATE": "2/12/2018",
    "RECEIPT": "2/42, 8/190, "
  },
  {
    "SNO": "15",
    "TITLE": "Shri.",
    "SURNAME": "Deevi",
    "NAME": "Acharya Sathrughna Kumar & Bros",
    "PLACE": "Gayatri Nagar ",
    "AMOUNT": "₹ 50,116",
    "DATE": "",
    "RECEIPT": "8/187, 12/290, 12/291"
  },
  {
    "SNO": "16",
    "TITLE": "Shri.",
    "SURNAME": "Narayanam",
    "NAME": "Satyanarayanacharyulu",
    "PLACE": "Memphis (USA)",
    "AMOUNT": "₹ 50,116",
    "DATE": "",
    "RECEIPT": ""
  },
  {
    "SNO": "17",
    "TITLE": "Shri.",
    "SURNAME": "Pedapudi",
    "NAME": "Krishnama Charyulu",
    "PLACE": "Saradanagar",
    "AMOUNT": "₹ 50,011",
    "DATE": "2/12/2018",
    "RECEIPT": "11/260, 2/40"
  },
  {
    "SNO": "18",
    "TITLE": "Shri.",
    "SURNAME": "Tamirisa",
    "NAME": "Srinivasa VenuGopal      s/o  T.Narashimhacharyulu",
    "PLACE": "Irvine ,USA",
    "AMOUNT": "₹ 50,000",
    "DATE": "",
    "RECEIPT": ""
  },
  {
    "SNO": "19",
    "TITLE": "Shri.",
    "SURNAME": "Deevi",
    "NAME": "Hayagreeva Bhattacharyulu",
    "PLACE": "Nandyal",
    "AMOUNT": "₹ 50,000",
    "DATE": "",
    "RECEIPT": "8/182"
  },
  {
    "SNO": "20",
    "TITLE": "Shri.",
    "SURNAME": "Agnihotram",
    "NAME": "V.G Krishnamacharyulu",
    "PLACE": "Saradanagar",
    "AMOUNT": "₹ 50,000",
    "DATE": "",
    "RECEIPT": "9/202"
  },
  {
    "SNO": "21",
    "TITLE": "Shri.",
    "SURNAME": "Ganjam",
    "NAME": "Pattabhiram",
    "PLACE": "Tarnaka",
    "AMOUNT": "₹ 50,000",
    "DATE": "",
    "RECEIPT": "5/109, 11/253"
  },
  {
    "SNO": "22",
    "TITLE": "Shri.",
    "SURNAME": "Deevi",
    "NAME": "Seetarambabu",
    "PLACE": "Chikkadapalli",
    "AMOUNT": "₹ 50,000",
    "DATE": "",
    "RECEIPT": "2/26"
  },
  {
    "SNO": "23",
    "TITLE": "Shri.",
    "SURNAME": "Sribhashyam",
    "NAME": "Muralidhar",
    "PLACE": "BHEL",
    "AMOUNT": "₹ 50,000",
    "DATE": "",
    "RECEIPT": "8/181"
  },
  {
    "SNO": "24",
    "TITLE": "Shri.",
    "SURNAME": "Rompicherla",
    "NAME": "Venkata Satyanarayana Charyulu",
    "PLACE": "Mytripuram, Karmanghat",
    "AMOUNT": "₹ 50,000",
    "DATE": "",
    "RECEIPT": "14/329"
  },
  {
    "SNO": "25",
    "TITLE": "Shri. Dr.",
    "SURNAME": "Deevi",
    "NAME": "Sudarsana Bhattacharyulu",
    "PLACE": "Repalle(Guntur Dist.)",
    "AMOUNT": "₹ 50,000",
    "DATE": "",
    "RECEIPT": "15/356"
  },
  {
    "SNO": "26",
    "TITLE": "Shri.",
    "SURNAME": "Agnihotram",
    "NAME": "Sreenivasa charyulu",
    "PLACE": "Beeramguda",
    "AMOUNT": "₹ 50,000",
    "DATE": "",
    "RECEIPT": "9/207, 15/263"
  },
  {
    "SNO": "27",
    "TITLE": "Shri.",
    "SURNAME": "Brindavanam",
    "NAME": "Venkata Appalacharyulu & Sons",
    "PLACE": "Kurnool",
    "AMOUNT": "₹ 50,000",
    "DATE": "",
    "RECEIPT": "13/309"
  },
  {
    "SNO": "28",
    "TITLE": "Shri.",
    "SURNAME": "Agnihotram",
    "NAME": "Srinivasa Deekshitulu",
    "PLACE": "Moscow",
    "AMOUNT": "₹ 50,000",
    "DATE": "16/11/2015",
    "RECEIPT": "13/313"
  },
  {
    "SNO": "29",
    "TITLE": "Shri.",
    "SURNAME": "Khandavalli",
    "NAME": "Venkata Ramana Murthy",
    "PLACE": "Gajularamaaram",
    "AMOUNT": "₹ 41,116",
    "DATE": "17/11/2019",
    "RECEIPT": "6/128, 12/282"
  },
  {
    "SNO": "30",
    "TITLE": "Shri.",
    "SURNAME": "Devayajanam",
    "NAME": "Murali Gopala Krishna Murthy",
    "PLACE": "BHEL",
    "AMOUNT": "₹ 32,500",
    "DATE": "2/12/2018",
    "RECEIPT": "2/38, 8/178, 11/256"
  },
  {
    "SNO": "31",
    "TITLE": "Shri.",
    "SURNAME": "Deevi",
    "NAME": "VenkataLakshmi",
    "PLACE": "Borabanda",
    "AMOUNT": "₹ 30,116",
    "DATE": "17/11/2019",
    "RECEIPT": "2/29, 12/277, 12/278"
  },
  {
    "SNO": "32",
    "TITLE": "Shri.",
    "SURNAME": "Sribhashyam",
    "NAME": "Ravi Chandra",
    "PLACE": "Alwal",
    "AMOUNT": "₹ 25,000",
    "DATE": "",
    "RECEIPT": "7/157"
  },
  {
    "SNO": "33",
    "TITLE": "Shri. Dr.",
    "SURNAME": "Deevi",
    "NAME": "Krishnaswami Iyengar",
    "PLACE": "Nalluru(Guntur Dist.)",
    "AMOUNT": "₹ 25,000",
    "DATE": "",
    "RECEIPT": "15/357"
  },
  {
    "SNO": "34",
    "TITLE": "Shri.",
    "SURNAME": "Parasaram",
    "NAME": "V Ranganadha Iyyenger & Brothers",
    "PLACE": "Malakpet",
    "AMOUNT": "₹ 25,000",
    "DATE": "",
    "RECEIPT": "15/341, 17/408"
  },
  {
    "SNO": "35",
    "TITLE": "Shri.",
    "SURNAME": "Narayanam",
    "NAME": "Sravan Kumar",
    "PLACE": "Chikkadapalli",
    "AMOUNT": "₹ 25,000",
    "DATE": "31/07/2015",
    "RECEIPT": "11/262"
  },
  {
    "SNO": "36",
    "TITLE": "Shri.",
    "SURNAME": "Narayanam",
    "NAME": "RadhaKrishna",
    "PLACE": "Chikkadapalli",
    "AMOUNT": "₹ 25,000",
    "DATE": "08/08/2015",
    "RECEIPT": "11/263"
  },
  {
    "SNO": "37",
    "TITLE": "Shri.",
    "SURNAME": "Rompicherla",
    "NAME": "Lakshmi Narasimha Charyulu",
    "PLACE": "Tenali",
    "AMOUNT": "₹ 25,000",
    "DATE": "07/08/2017",
    "RECEIPT": "2/28"
  },
  {
    "SNO": "38",
    "TITLE": "Shri.",
    "SURNAME": "Peddinti",
    "NAME": "Gopala Charyulu and son inlaws",
    "PLACE": "Jillelaguda",
    "AMOUNT": "₹ 25,000",
    "DATE": "26/08/2018",
    "RECEIPT": "2/33"
  },
  {
    "SNO": "39",
    "TITLE": "Shri.",
    "SURNAME": "V",
    "NAME": "Ravichandran",
    "PLACE": "Chennai",
    "AMOUNT": "₹ 25,000",
    "DATE": "04/03/2020",
    "RECEIPT": "6/137"
  },
  {
    "SNO": "40",
    "TITLE": "Shri.",
    "SURNAME": "Peddinti",
    "NAME": "R K Chakrapani",
    "PLACE": "Moosarambagh",
    "AMOUNT": "₹ 20,232",
    "DATE": "05/05/2015",
    "RECEIPT": "17/409, 17/413"
  },
  {
    "SNO": "41",
    "TITLE": "Shri.",
    "SURNAME": "Paramkusam",
    "NAME": "Ranganadhacharyulu",
    "PLACE": "A.S.Rao Nagar",
    "AMOUNT": "₹ 20,000",
    "DATE": "14/08/2015",
    "RECEIPT": "5/114"
  },
  {
    "SNO": "42",
    "TITLE": "Shri.",
    "SURNAME": "",
    "NAME": "N.Ranga Rao",
    "PLACE": "A.S.Rao Nagar",
    "AMOUNT": "₹ 20,000",
    "DATE": "",
    "RECEIPT": "2/27"
  },
  {
    "SNO": "43",
    "TITLE": "Shri.",
    "SURNAME": "Tamirisa",
    "NAME": "Panakalacharyulu",
    "PLACE": "Repalle(Guntur Dist.)",
    "AMOUNT": "₹ 20,000",
    "DATE": "",
    "RECEIPT": ""
  },
  {
    "SNO": "44",
    "TITLE": "Shri.",
    "SURNAME": "Deevi",
    "NAME": "Sai Srinivas",
    "PLACE": "Hydernagar",
    "AMOUNT": "₹ 20,000",
    "DATE": "18/08/2015",
    "RECEIPT": "5/116"
  },
  {
    "SNO": "45",
    "TITLE": "Shri.",
    "SURNAME": "Peddinti",
    "NAME": "S S Hariprasad ",
    "PLACE": "Motinagar",
    "AMOUNT": "₹ 20,000",
    "DATE": "29/8/2015",
    "RECEIPT": "8/193, 11/264"
  },
  {
    "SNO": "46",
    "TITLE": "Shri.",
    "SURNAME": "Khandavalli",
    "NAME": "Venkata SatyaPrabhakaram",
    "PLACE": "Kukatpally",
    "AMOUNT": "₹ 20,000",
    "DATE": "2/12/2018",
    "RECEIPT": "2/41, 9/205"
  },
  {
    "SNO": "47",
    "TITLE": "Shri.",
    "SURNAME": "Tamirisa",
    "NAME": "Narasimha Rao",
    "PLACE": "Vanasthalipuram",
    "AMOUNT": "₹ 20,000",
    "DATE": "2/12/2018",
    "RECEIPT": "2/39"
  },
  {
    "SNO": "48",
    "TITLE": "Shri.",
    "SURNAME": "Deevi",
    "NAME": "S V L NarasimhaCharyulu",
    "PLACE": "Alwal",
    "AMOUNT": "₹ 20,000",
    "DATE": "11/9/2018",
    "RECEIPT": "7/155, 2/34"
  },
  {
    "SNO": "49",
    "TITLE": "Shri.",
    "SURNAME": "Gudipudi",
    "NAME": "Seetharamacharyulu",
    "PLACE": "Khairthabad",
    "AMOUNT": "₹ 20,000",
    "DATE": "26/8/2018",
    "RECEIPT": "15/368, 2/31"
  },
  {
    "SNO": "50",
    "TITLE": "Shri.",
    "SURNAME": "Agnihotram",
    "NAME": "HarinarayanaCharyulu",
    "PLACE": "Balaji nagar",
    "AMOUNT": "₹ 20,000",
    "DATE": "15/08/2019",
    "RECEIPT": "8/198 ,2/46"
  },
  {
    "SNO": "51",
    "TITLE": "Shri.",
    "SURNAME": "Deevi",
    "NAME": "S Bhishak",
    "PLACE": "Vanasthalipuram",
    "AMOUNT": "₹ 20,000",
    "DATE": "",
    "RECEIPT": "13/301, 17/423"
  },
  {
    "SNO": "52",
    "TITLE": "Shri.",
    "SURNAME": "Khandavalli",
    "NAME": "PrabhakaraCharyulu",
    "PLACE": "Vanasthalipuram",
    "AMOUNT": "₹ 20,000",
    "DATE": "2/12/2018",
    "RECEIPT": "13/308, 2/04"
  },
  {
    "SNO": "53",
    "TITLE": "Shri.",
    "SURNAME": "Chakravarthula",
    "NAME": "Srinivasacharyulu",
    "PLACE": "HMT Nagar",
    "AMOUNT": "₹ 20,000",
    "DATE": "28/06/2023",
    "RECEIPT": "12/293"
  },
  {
    "SNO": "54",
    "TITLE": "Shri.",
    "SURNAME": "Agnihotram",
    "NAME": "Sreerama Chakravarty, Lakshmana Kumar and Venugopal",
    "PLACE": "Gayatri Nagar - ",
    "AMOUNT": "₹ 15,000",
    "DATE": "",
    "RECEIPT": "15/352"
  },
  {
    "SNO": "55",
    "TITLE": "Shri.",
    "SURNAME": "Peddinti",
    "NAME": "GopalaKrishna",
    "PLACE": "Uppal Depot",
    "AMOUNT": "₹ 15,000",
    "DATE": "20/11/2022",
    "RECEIPT": "11/252, 12/289"
  },
  {
    "SNO": "56",
    "TITLE": "Shri.",
    "SURNAME": "Agnihotram",
    "NAME": "Krishna Kishore",
    "PLACE": "USA",
    "AMOUNT": "₹ 11,493",
    "DATE": "",
    "RECEIPT": ""
  },
  {
    "SNO": "57",
    "TITLE": "Shri.",
    "SURNAME": "Tamirisa",
    "NAME": "Vikhanasacharyulu",
    "PLACE": "Bhavani Nagar(Nacharam)",
    "AMOUNT": "₹ 10,500",
    "DATE": "17/11/2019",
    "RECEIPT": "12/280"
  },
  {
    "SNO": "58",
    "TITLE": "Shri.",
    "SURNAME": "Vedantam",
    "NAME": "RamaKrishna",
    "PLACE": "Moulali",
    "AMOUNT": "₹ 10,116",
    "DATE": "",
    "RECEIPT": "6/126"
  },
  {
    "SNO": "59",
    "TITLE": "Shri.",
    "SURNAME": "Deevi",
    "NAME": "Srinivas ",
    "PLACE": "BanjaraHills",
    "AMOUNT": "₹ 10,116",
    "DATE": "",
    "RECEIPT": ""
  },
  {
    "SNO": "60",
    "TITLE": "Shri.",
    "SURNAME": "Agnihotram",
    "NAME": "AppalaCharyulu",
    "PLACE": "Gayatri Nagar",
    "AMOUNT": "₹ 10,116",
    "DATE": "",
    "RECEIPT": "14/326"
  },
  {
    "SNO": "61",
    "TITLE": "Shri.",
    "SURNAME": "Vedantam",
    "NAME": "Radha Krishnamacharyulu",
    "PLACE": "Mallapur",
    "AMOUNT": "₹ 10,116",
    "DATE": "",
    "RECEIPT": ""
  },
  {
    "SNO": "62",
    "TITLE": "Shri.",
    "SURNAME": "Deevi",
    "NAME": "Venkataramana",
    "PLACE": "Vanasthalipuram",
    "AMOUNT": "₹ 10,116",
    "DATE": "",
    "RECEIPT": ""
  },
  {
    "SNO": "63",
    "TITLE": "Shri.",
    "SURNAME": "Sribhashyam",
    "NAME": "Ramakrishna",
    "PLACE": "Saroornagar",
    "AMOUNT": "₹ 10,116",
    "DATE": "",
    "RECEIPT": "14/335, 11/257"
  },
  {
    "SNO": "64",
    "TITLE": "Shri.",
    "SURNAME": "",
    "NAME": "S Prasada Charyulu & Bros",
    "PLACE": "Bhimavaram",
    "AMOUNT": "₹ 10,116",
    "DATE": "",
    "RECEIPT": ""
  },
  {
    "SNO": "65",
    "TITLE": "Shri.",
    "SURNAME": "Nalluri",
    "NAME": "Dasaradha Srinivasa Deekshithulu",
    "PLACE": "Nalluru (Guntur Dist.)",
    "AMOUNT": "₹ 10,116",
    "DATE": "",
    "RECEIPT": ""
  },
  {
    "SNO": "66",
    "TITLE": "Shri.",
    "SURNAME": "Srinivasula",
    "NAME": "Subhadhracharyulu",
    "PLACE": "Jillelaguda",
    "AMOUNT": "₹ 10,116",
    "DATE": "03/07/2016",
    "RECEIPT": "17/414"
  },
  {
    "SNO": "67",
    "TITLE": "Smt.",
    "SURNAME": "Deevi",
    "NAME": "Rajyalakshmi",
    "PLACE": "Jillelaguda",
    "AMOUNT": "₹ 10,116",
    "DATE": "01/09/2016",
    "RECEIPT": "17/415"
  },
  {
    "SNO": "68",
    "TITLE": "Shri.",
    "SURNAME": "Vedantam",
    "NAME": "Hari Srinivasa Deekshitulu",
    "PLACE": "Boduppal",
    "AMOUNT": "₹ 10,116",
    "DATE": "24/07/2016",
    "RECEIPT": "17/418"
  },
  {
    "SNO": "69",
    "TITLE": "Shri.",
    "SURNAME": "Deevi",
    "NAME": "V V Ramakrishnama Charyulu",
    "PLACE": "Boduppal",
    "AMOUNT": "₹ 10,116",
    "DATE": "02/09/2016",
    "RECEIPT": "5/119"
  },
  {
    "SNO": "70",
    "TITLE": "Shri.",
    "SURNAME": "Muttevi",
    "NAME": "LeelaKrishna",
    "PLACE": "Borabanda",
    "AMOUNT": "₹ 10,116",
    "DATE": "18/08/2016",
    "RECEIPT": "5/118"
  },
  {
    "SNO": "71",
    "TITLE": "Shri.",
    "SURNAME": "Peddinti",
    "NAME": "Venkata Krishna Murty",
    "PLACE": "Dammaiguda",
    "AMOUNT": "₹ 10,116",
    "DATE": "17/11/2019",
    "RECEIPT": "12/276"
  },
  {
    "SNO": "72",
    "TITLE": "Shri.",
    "SURNAME": "P",
    "NAME": "V R Sarath Kumar",
    "PLACE": "KPHB",
    "AMOUNT": "₹ 10,116",
    "DATE": "08/12/2019",
    "RECEIPT": "17/421"
  },
  {
    "SNO": "73",
    "TITLE": "Shri.",
    "SURNAME": "Deevi",
    "NAME": "Rambabu",
    "PLACE": "Venkatadri Township",
    "AMOUNT": "₹ 10,100",
    "DATE": "15/08/2019",
    "RECEIPT": "2/47"
  },
  {
    "SNO": "74",
    "TITLE": "Shri.",
    "SURNAME": "Deevi",
    "NAME": "Venu Madhav",
    "PLACE": "BHEL",
    "AMOUNT": "₹ 10,016",
    "DATE": "",
    "RECEIPT": "8/177"
  },
  {
    "SNO": "75",
    "TITLE": "Shri.",
    "SURNAME": "Govardhanam",
    "NAME": "Pattabhirama charyulu ",
    "PLACE": "Telephone Colony,Hyderabad",
    "AMOUNT": "₹ 10,001",
    "DATE": "",
    "RECEIPT": "8/195"
  },
  {
    "SNO": "76",
    "TITLE": "Shri.",
    "SURNAME": "Deevi",
    "NAME": "Tushara & Havisha in Memory of their Father late Deevi Lakshmi Narasimha chrayulu",
    "PLACE": "Vasavi nagar coloy, R.K.Puram Kothapeta ",
    "AMOUNT": "₹ 10,001",
    "DATE": "25/11/2015",
    "RECEIPT": "5/117"
  },
  {
    "SNO": "77",
    "TITLE": "Shri.",
    "SURNAME": "Peddinti",
    "NAME": "Bhaskara Murty ",
    "PLACE": "Moulali",
    "AMOUNT": "₹ 10,001",
    "DATE": "",
    "RECEIPT": ""
  },
  {
    "SNO": "78",
    "TITLE": "Shri.",
    "SURNAME": "",
    "NAME": "S.V.Rangacharyulu",
    "PLACE": "Hyderabad",
    "AMOUNT": "₹ 10,001",
    "DATE": "",
    "RECEIPT": "17/406"
  },
  {
    "SNO": "79",
    "TITLE": "Shri.",
    "SURNAME": "Parasaram",
    "NAME": "AlahaSingaracharyulu",
    "PLACE": "Mallapur",
    "AMOUNT": "₹ 10,000",
    "DATE": "",
    "RECEIPT": ""
  },
  {
    "SNO": "80",
    "TITLE": "Shri.",
    "SURNAME": "Srinivasula",
    "NAME": "Srinivasula Deekshitulu",
    "PLACE": "Alkapuri",
    "AMOUNT": "₹ 10,000",
    "DATE": "",
    "RECEIPT": "5/102"
  },
  {
    "SNO": "81",
    "TITLE": "Smt.",
    "SURNAME": "Vedantam",
    "NAME": "Sita",
    "PLACE": "Hasthinapuram",
    "AMOUNT": "₹ 10,000",
    "DATE": "",
    "RECEIPT": "13/302"
  },
  {
    "SNO": "82",
    "TITLE": "Shri.",
    "SURNAME": "Deevi",
    "NAME": "Srinivas ",
    "PLACE": "Vompuguda",
    "AMOUNT": "₹ 10,000",
    "DATE": "",
    "RECEIPT": ""
  },
  {
    "SNO": "83",
    "TITLE": "Shri.",
    "SURNAME": "Attili",
    "NAME": "Gopala krishnamacharyulu",
    "PLACE": "Telephone Colony",
    "AMOUNT": "₹ 10,000",
    "DATE": "",
    "RECEIPT": "5/103"
  },
  {
    "SNO": "84",
    "TITLE": "Shri.",
    "SURNAME": "Peddinti",
    "NAME": "Rajagopal",
    "PLACE": "L.B.Nagar",
    "AMOUNT": "₹ 10,000",
    "DATE": "",
    "RECEIPT": "5/111"
  },
  {
    "SNO": "85",
    "TITLE": "Shri.",
    "SURNAME": "Deevi",
    "NAME": "Tandava Krishna Murthy",
    "PLACE": "Chaitanyapuri",
    "AMOUNT": "₹ 10,000",
    "DATE": "",
    "RECEIPT": "5/108"
  },
  {
    "SNO": "86",
    "TITLE": "Shri.",
    "SURNAME": "Vedantam",
    "NAME": "Srinivasa Murty",
    "PLACE": "Secunderabad",
    "AMOUNT": "₹ 10,000",
    "DATE": "",
    "RECEIPT": "6/129"
  },
  {
    "SNO": "87",
    "TITLE": "Smt.",
    "SURNAME": "Deevi",
    "NAME": "Lakshmi Kantam",
    "PLACE": "Alwal",
    "AMOUNT": "₹ 10,000",
    "DATE": "",
    "RECEIPT": "7/152"
  },
  {
    "SNO": "88",
    "TITLE": "Shri.",
    "SURNAME": "Agnihotram",
    "NAME": "V RaghavaCharyulu",
    "PLACE": "BHEL",
    "AMOUNT": "₹ 10,000",
    "DATE": "",
    "RECEIPT": "8/179"
  },
  {
    "SNO": "89",
    "TITLE": "Smt.",
    "SURNAME": "Vedantam",
    "NAME": "Devaki Devi & SreenivasaMurty",
    "PLACE": "Vanasthalipuram",
    "AMOUNT": "₹ 10,000",
    "DATE": "",
    "RECEIPT": "8/185"
  },
  {
    "SNO": "90",
    "TITLE": "Shri.",
    "SURNAME": "Ganjam",
    "NAME": "G A SeshaCharyulu",
    "PLACE": "MacDowel Colony (USA)",
    "AMOUNT": "₹ 10,000",
    "DATE": "",
    "RECEIPT": "8/188"
  },
  {
    "SNO": "91",
    "TITLE": "Shri.",
    "SURNAME": "Brindavanam",
    "NAME": "V N A Vedadri ",
    "PLACE": "Nacharam",
    "AMOUNT": "₹ 10,000",
    "DATE": "",
    "RECEIPT": "8/189"
  },
  {
    "SNO": "92",
    "TITLE": "Shri.",
    "SURNAME": "Rompicherla",
    "NAME": "V BharataCharyulu",
    "PLACE": "Nallakunta",
    "AMOUNT": "₹ 10,000",
    "DATE": "",
    "RECEIPT": "8/192"
  },
  {
    "SNO": "93",
    "TITLE": "Shri.",
    "SURNAME": "Agnihotram",
    "NAME": "Lakshmi NarasimhaCharyulu ",
    "PLACE": "Hasthinapuram",
    "AMOUNT": "₹ 10,000",
    "DATE": "",
    "RECEIPT": "8/186, 13/303"
  },
  {
    "SNO": "94",
    "TITLE": "Shri.",
    "SURNAME": "Tamirisa",
    "NAME": "V L N Acharyulu ",
    "PLACE": "Pedaravuru (Guntur Dist )",
    "AMOUNT": "₹ 10,000",
    "DATE": "",
    "RECEIPT": "8/197"
  },
  {
    "SNO": "95",
    "TITLE": "Shri.",
    "SURNAME": "Vedantam",
    "NAME": "ChandraMohan Srinivas ",
    "PLACE": "Gayatri Nagar",
    "AMOUNT": "₹ 10,000",
    "DATE": "",
    "RECEIPT": "14/327"
  },
  {
    "SNO": "96",
    "TITLE": "Shri.",
    "SURNAME": "Agnihotram",
    "NAME": "Krishna Prasad",
    "PLACE": "Gayatri Nagar",
    "AMOUNT": "₹ 10,000",
    "DATE": "",
    "RECEIPT": "14/328"
  },
  {
    "SNO": "97",
    "TITLE": "Shri.",
    "SURNAME": "Vedantam",
    "NAME": "MadhavaCharyulu ",
    "PLACE": "Vanasthalipuram",
    "AMOUNT": "₹ 10,000",
    "DATE": "",
    "RECEIPT": "14/350"
  },
  {
    "SNO": "98",
    "TITLE": "Shri.",
    "SURNAME": "Rompicherla",
    "NAME": "Muralikrishna",
    "PLACE": "Jillelaguda",
    "AMOUNT": "₹ 10,000",
    "DATE": "",
    "RECEIPT": "14/331"
  },
  {
    "SNO": "99",
    "TITLE": "Shri.",
    "SURNAME": "Brindavanam",
    "NAME": "Venkata Venugopalacharyulu",
    "PLACE": "Borabanda",
    "AMOUNT": "₹ 10,000",
    "DATE": "",
    "RECEIPT": "14/345"
  },
  {
    "SNO": "100",
    "TITLE": "Shri.",
    "SURNAME": "Kallagunta",
    "NAME": "V Raghurama Murty",
    "PLACE": "Kukatpally",
    "AMOUNT": "₹ 10,000",
    "DATE": "",
    "RECEIPT": "15/358"
  },
  {
    "SNO": "101",
    "TITLE": "Shri.",
    "SURNAME": "Vedantam",
    "NAME": "Satyanarayana Kumar",
    "PLACE": "Kukatpally",
    "AMOUNT": "₹ 10,000",
    "DATE": "",
    "RECEIPT": "15/361"
  },
  {
    "SNO": "102",
    "TITLE": "Shri.",
    "SURNAME": "Govardhanam",
    "NAME": "Narasimha Murty",
    "PLACE": "Hydershakotla",
    "AMOUNT": "₹ 10,000",
    "DATE": "",
    "RECEIPT": "15/364"
  },
  {
    "SNO": "103",
    "TITLE": "Shri.",
    "SURNAME": "Nalluri",
    "NAME": "Lakshmi Narayana BhattaCharyulu",
    "PLACE": "Nallur(Guntur Dist.)",
    "AMOUNT": "₹ 10,000",
    "DATE": "",
    "RECEIPT": "16/376"
  },
  {
    "SNO": "104",
    "TITLE": "Shri.",
    "SURNAME": "Parasaram",
    "NAME": "Seshasai",
    "PLACE": "Vanasthalipuram",
    "AMOUNT": "₹ 10,000",
    "DATE": "",
    "RECEIPT": "13/305"
  },
  {
    "SNO": "105",
    "TITLE": "Shri.",
    "SURNAME": "Peddinti",
    "NAME": "Sreerama Chandra Murty",
    "PLACE": "Chikkadapalli",
    "AMOUNT": "₹ 10,000",
    "DATE": "",
    "RECEIPT": "5/112"
  },
  {
    "SNO": "106",
    "TITLE": "Shri.",
    "SURNAME": "Sribhashyam",
    "NAME": "R Krishnama Charyulu",
    "PLACE": "Saroornagar",
    "AMOUNT": "₹ 10,000",
    "DATE": "",
    "RECEIPT": ""
  },
  {
    "SNO": "107",
    "TITLE": "Shri.",
    "SURNAME": "Sribhashyam",
    "NAME": "Krishna Prasad",
    "PLACE": "Saroornagar",
    "AMOUNT": "₹ 10,000",
    "DATE": "",
    "RECEIPT": "14/337, 17/404"
  },
  {
    "SNO": "108",
    "TITLE": "Shri.",
    "SURNAME": "Sribhashyam",
    "NAME": "Narayana",
    "PLACE": "Saroornagar",
    "AMOUNT": "₹ 10,000",
    "DATE": "",
    "RECEIPT": ""
  },
  {
    "SNO": "109",
    "TITLE": "Shri.",
    "SURNAME": "Nalluri",
    "NAME": "Madhusudhan ",
    "PLACE": "Warasiguda",
    "AMOUNT": "₹ 10,000",
    "DATE": "",
    "RECEIPT": ""
  },
  {
    "SNO": "110",
    "TITLE": "Shri.",
    "SURNAME": "Nalluri",
    "NAME": "Vikhanasa BattaCharyulu",
    "PLACE": "Nallur(Guntur Dist.)",
    "AMOUNT": "₹ 10,000",
    "DATE": "08/06/2015",
    "RECEIPT": ""
  },
  {
    "SNO": "111",
    "TITLE": "Shri.",
    "SURNAME": "Rompicherla",
    "NAME": "Raghavacharyulu  In memory of Late R.VidyaSagar ",
    "PLACE": "Tenali",
    "AMOUNT": "₹ 10,000",
    "DATE": "",
    "RECEIPT": ""
  },
  {
    "SNO": "112",
    "TITLE": "Smt.",
    "SURNAME": "Vadapalli",
    "NAME": "Kanakam (on the occation of his son's thread cermony)",
    "PLACE": "Malikipuram (E.G. Dist)",
    "AMOUNT": "₹ 10,000",
    "DATE": "22/03/2016",
    "RECEIPT": "11/275"
  },
  {
    "SNO": "113",
    "TITLE": "Shri.",
    "SURNAME": "Deevi",
    "NAME": "Srinivasa Krishna",
    "PLACE": "Vanukuru",
    "AMOUNT": "₹ 10,000",
    "DATE": "12/09/2016",
    "RECEIPT": ""
  },
  {
    "SNO": "114",
    "TITLE": "Shri.",
    "SURNAME": "",
    "NAME": "D T K Chakravarthi",
    "PLACE": "",
    "AMOUNT": "₹ 10,000",
    "DATE": "20/11/2016",
    "RECEIPT": "5/121"
  },
  {
    "SNO": "115",
    "TITLE": "Shri.",
    "SURNAME": "Govardhanam",
    "NAME": "Anantharam",
    "PLACE": "Motinagar",
    "AMOUNT": "₹ 10,000",
    "DATE": "20/11/2016",
    "RECEIPT": "5/122"
  },
  {
    "SNO": "116",
    "TITLE": "Shri.",
    "SURNAME": "Tamirisa",
    "NAME": "Anantha Charyulu",
    "PLACE": "Uppal",
    "AMOUNT": "₹ 10,000",
    "DATE": "20/01/2017",
    "RECEIPT": ""
  },
  {
    "SNO": "117",
    "TITLE": "Shri.",
    "SURNAME": "Deevi",
    "NAME": "Sobhanadri Lakshmi Narasimha Charyulu",
    "PLACE": "Alwal",
    "AMOUNT": "₹ 10,000",
    "DATE": "",
    "RECEIPT": ""
  },
  {
    "SNO": "118",
    "TITLE": "Shri.",
    "SURNAME": "Deevi",
    "NAME": "Venkata Ramana",
    "PLACE": "Vanasthalipuram",
    "AMOUNT": "₹ 10,000",
    "DATE": "02/02/2018",
    "RECEIPT": "2/35"
  },
  {
    "SNO": "119",
    "TITLE": "Shri.",
    "SURNAME": "Deevi",
    "NAME": "Harsha Ayyengar",
    "PLACE": "Vanasthalipuram",
    "AMOUNT": "₹ 10,000",
    "DATE": "03/11/2018",
    "RECEIPT": "2/37"
  },
  {
    "SNO": "120",
    "TITLE": "Shri.",
    "SURNAME": "Vedantam",
    "NAME": "Satish Kumar",
    "PLACE": "Bharat Nagar",
    "AMOUNT": "₹ 10,000",
    "DATE": "15/08/2019",
    "RECEIPT": "2/44"
  },
  {
    "SNO": "121",
    "TITLE": "Shri.",
    "SURNAME": "Agnihotram ",
    "NAME": " V S R K Acharyulu in memory of his father Agnihotram PeddaSeshacharyulu",
    "PLACE": "Ghatakesar",
    "AMOUNT": "₹ 10,000",
    "DATE": "17/11/2019",
    "RECEIPT": "12/279"
  },
  {
    "SNO": "122",
    "TITLE": "Shri.",
    "SURNAME": "Sribhashyam",
    "NAME": "R Krishnamacharyulu",
    "PLACE": "Saroornagar",
    "AMOUNT": "₹ 10,000",
    "DATE": "",
    "RECEIPT": "14/334, 17/403"
  },
  {
    "SNO": "123",
    "TITLE": "Shri.",
    "SURNAME": "Sribhashyam",
    "NAME": "Sriman narayana",
    "PLACE": "Saroornagar",
    "AMOUNT": "₹ 10,000",
    "DATE": "",
    "RECEIPT": "14/336, 17/412"
  },
  {
    "SNO": "124",
    "TITLE": "Shri.",
    "SURNAME": "Aravapalli",
    "NAME": "Vikhanasa Charyulu",
    "PLACE": "Aravapally",
    "AMOUNT": "₹ 10,000",
    "DATE": "13/03/2017",
    "RECEIPT": "13/317"
  },
  {
    "SNO": "125",
    "TITLE": "Shri.",
    "SURNAME": "Deevi",
    "NAME": "Ramesh Babu",
    "PLACE": "",
    "AMOUNT": "₹ 10,000",
    "DATE": "20/11/2022",
    "RECEIPT": "12/285"
  },
  {
    "SNO": "126",
    "TITLE": "Shri.",
    "SURNAME": "Parankusam",
    "NAME": "Jwala NarasimhaCharyulu",
    "PLACE": "Moosarambagh",
    "AMOUNT": "₹ 7,722",
    "DATE": "",
    "RECEIPT": "14/340"
  },
  {
    "SNO": "127",
    "TITLE": "Shri.",
    "SURNAME": "Khandavalli",
    "NAME": "V R S N Acharyulu",
    "PLACE": "Rajahmundry",
    "AMOUNT": "₹ 7,000",
    "DATE": "",
    "RECEIPT": "11/261"
  },
  {
    "SNO": "128",
    "TITLE": "Smt.",
    "SURNAME": "Devayajanam",
    "NAME": "Lalitha Kumari",
    "PLACE": "Jillelaguda",
    "AMOUNT": "₹ 7,000",
    "DATE": "",
    "RECEIPT": "14/330, 17/416"
  },
  {
    "SNO": "129",
    "TITLE": "Shri.",
    "SURNAME": "Vedantam",
    "NAME": "Giri Prasad",
    "PLACE": "Borabanda",
    "AMOUNT": "₹ 6,000",
    "DATE": "26/08/2018",
    "RECEIPT": "2/32"
  },
  {
    "SNO": "130",
    "TITLE": "Shri.",
    "SURNAME": "Deevi",
    "NAME": "Yogananda Narasimha Deekshithulu",
    "PLACE": "Jillelaguda",
    "AMOUNT": "₹ 5,500",
    "DATE": "17/11/2019",
    "RECEIPT": "12/281, 14/332"
  },
  {
    "SNO": "131",
    "TITLE": "Shri.",
    "SURNAME": "Vedantam",
    "NAME": "Hariprasad",
    "PLACE": "A.S.Rao Nagar",
    "AMOUNT": "₹ 5,116",
    "DATE": "",
    "RECEIPT": "15/371"
  },
  {
    "SNO": "132",
    "TITLE": "Shri.",
    "SURNAME": "Nalluri",
    "NAME": "Srimannarayanacharyulu",
    "PLACE": "Moulali",
    "AMOUNT": "₹ 5,116",
    "DATE": "",
    "RECEIPT": "15/372"
  },
  {
    "SNO": "133",
    "TITLE": "Shri.",
    "SURNAME": "",
    "NAME": "P.V KrishnaMurty",
    "PLACE": "Neredmet",
    "AMOUNT": "₹ 5,116",
    "DATE": "",
    "RECEIPT": "8/191"
  },
  {
    "SNO": "134",
    "TITLE": "Shri.",
    "SURNAME": "Tamirisa",
    "NAME": "V G Jagannath",
    "PLACE": "Pragathi Nagar",
    "AMOUNT": "₹ 5,116",
    "DATE": "",
    "RECEIPT": "14/342"
  },
  {
    "SNO": "135",
    "TITLE": "Shri.",
    "SURNAME": "Narayanam",
    "NAME": "Vivekananda",
    "PLACE": "Motinagar",
    "AMOUNT": "₹ 5,116",
    "DATE": "",
    "RECEIPT": ""
  },
  {
    "SNO": "136",
    "TITLE": "Shri.",
    "SURNAME": "D",
    "NAME": "Sreenivasa Charyulu",
    "PLACE": "BanjaraHills",
    "AMOUNT": "₹ 5,116",
    "DATE": "",
    "RECEIPT": "15/354"
  },
  {
    "SNO": "137",
    "TITLE": "Shri.",
    "SURNAME": "Kallagunta",
    "NAME": "L R Prasad",
    "PLACE": "Vanasthalipuram",
    "AMOUNT": "₹ 5,116",
    "DATE": "",
    "RECEIPT": ""
  },
  {
    "SNO": "138",
    "TITLE": "Shri.",
    "SURNAME": "",
    "NAME": "R.Ranganadha Charyulu",
    "PLACE": "Tirupathi",
    "AMOUNT": "₹ 5,116",
    "DATE": "",
    "RECEIPT": ""
  },
  {
    "SNO": "139",
    "TITLE": "Shri.",
    "SURNAME": "",
    "NAME": "S.A.V.SatyanarayanaCharyulu",
    "PLACE": "A.S.Rao Nagar",
    "AMOUNT": "₹ 5,116",
    "DATE": "",
    "RECEIPT": "17/407"
  },
  {
    "SNO": "140",
    "TITLE": "Shri.",
    "SURNAME": "Deevi",
    "NAME": "Sridhar",
    "PLACE": "Vanasthalipuram",
    "AMOUNT": "₹ 5,116",
    "DATE": "20/11/2022",
    "RECEIPT": "12/287"
  },
  {
    "SNO": "141",
    "TITLE": "Shri.",
    "SURNAME": "Narayanam",
    "NAME": "RamaKrishna",
    "PLACE": "Deendayaal nagar",
    "AMOUNT": "₹ 5,100",
    "DATE": "",
    "RECEIPT": "14/344"
  },
  {
    "SNO": "142",
    "TITLE": "Shri.",
    "SURNAME": "Bhavavarapu",
    "NAME": "SatyaPrasad",
    "PLACE": "Boduppal",
    "AMOUNT": "₹ 5,004",
    "DATE": "03/07/2016",
    "RECEIPT": "17/417"
  },
  {
    "SNO": "143",
    "TITLE": "Shri.",
    "SURNAME": "Meduri",
    "NAME": "Kodanda Rama Deekshitulu",
    "PLACE": "Nacharam",
    "AMOUNT": "₹ 5,004",
    "DATE": "03/07/2016",
    "RECEIPT": "17/419"
  },
  {
    "SNO": "144",
    "TITLE": "Smt.",
    "SURNAME": "",
    "NAME": "A. Satyavathi ",
    "PLACE": "Uppal Depot",
    "AMOUNT": "₹ 5,001",
    "DATE": "",
    "RECEIPT": "11/272"
  },
  {
    "SNO": "145",
    "TITLE": "Shri.",
    "SURNAME": "P",
    "NAME": "RangaaCharyulu",
    "PLACE": "Vanasthalipuram",
    "AMOUNT": "₹ 5,001",
    "DATE": "",
    "RECEIPT": "8/184"
  },
  {
    "SNO": "146",
    "TITLE": "Shri.",
    "SURNAME": "Agnihotram",
    "NAME": "Sreekanth",
    "PLACE": "Borabanda",
    "AMOUNT": "₹ 5,001",
    "DATE": "",
    "RECEIPT": "8/194"
  },
  {
    "SNO": "147",
    "TITLE": "Smt.",
    "SURNAME": "",
    "NAME": "P. Sai Madhuri ",
    "PLACE": "",
    "AMOUNT": "₹ 5,001",
    "DATE": "09/05/2015",
    "RECEIPT": ""
  },
  {
    "SNO": "148",
    "TITLE": "Shri.",
    "SURNAME": "",
    "NAME": "Dr. D. Srinivasacharyulu",
    "PLACE": "Mangalagiri",
    "AMOUNT": "₹ 5,001",
    "DATE": "",
    "RECEIPT": "11/271"
  },
  {
    "SNO": "149",
    "TITLE": "Shri.",
    "SURNAME": "Pedapudi",
    "NAME": "Venugopala Krishnamacharyulu",
    "PLACE": "Saroornagar",
    "AMOUNT": "₹ 5,000",
    "DATE": "",
    "RECEIPT": "5/104"
  },
  {
    "SNO": "150",
    "TITLE": "Shri.",
    "SURNAME": "Srinivasula",
    "NAME": "RamachandraaCharyulu",
    "PLACE": "Doctors Colony",
    "AMOUNT": "₹ 5,000",
    "DATE": "",
    "RECEIPT": "5/106"
  },
  {
    "SNO": "151",
    "TITLE": "Shri.",
    "SURNAME": "Vedantam",
    "NAME": "Srinivasa Ayodhyanadh",
    "PLACE": "Doctors Colony",
    "AMOUNT": "₹ 5,000",
    "DATE": "",
    "RECEIPT": "5/107"
  },
  {
    "SNO": "152",
    "TITLE": "Smt.",
    "SURNAME": "Vadapalli",
    "NAME": "VijayaLakshmi",
    "PLACE": "Humayun Nagar",
    "AMOUNT": "₹ 5,000",
    "DATE": "",
    "RECEIPT": "5/110"
  },
  {
    "SNO": "153",
    "TITLE": "Shri.",
    "SURNAME": "Sribhashyam",
    "NAME": "Anjaneyulu",
    "PLACE": "Vanasthalipuram",
    "AMOUNT": "₹ 5,000",
    "DATE": "",
    "RECEIPT": "13/306"
  },
  {
    "SNO": "154",
    "TITLE": "Shri.",
    "SURNAME": "Peddinti",
    "NAME": "VenkataGopala krishnamacharyulu",
    "PLACE": "Moulali",
    "AMOUNT": "₹ 5,000",
    "DATE": "",
    "RECEIPT": "6/127"
  },
  {
    "SNO": "155",
    "TITLE": "Shri.",
    "SURNAME": "",
    "NAME": "P.V.B SatyanarayanaCharyulu",
    "PLACE": "BHEL",
    "AMOUNT": "₹ 5,000",
    "DATE": "",
    "RECEIPT": "8/180"
  },
  {
    "SNO": "156",
    "TITLE": "Shri.",
    "SURNAME": "Meduri",
    "NAME": "Murali",
    "PLACE": "Nagaram",
    "AMOUNT": "₹ 5,000",
    "DATE": "29/08/2015",
    "RECEIPT": "11/266, 8/196"
  },
  {
    "SNO": "157",
    "TITLE": "Shri.",
    "SURNAME": "Vedantam",
    "NAME": "Srinivasa Murthy",
    "PLACE": "Vijayanagar Colony",
    "AMOUNT": "₹ 5,000",
    "DATE": "",
    "RECEIPT": "8/200"
  },
  {
    "SNO": "158",
    "TITLE": "Shri.",
    "SURNAME": "",
    "NAME": "V.RamaKrishna & Bros ,(In memory of Late V.Janardhanacharyulu )",
    "PLACE": "Kakinada",
    "AMOUNT": "₹ 5,000",
    "DATE": "",
    "RECEIPT": "11/255"
  },
  {
    "SNO": "159",
    "TITLE": "Shri.",
    "SURNAME": "Agnihotram",
    "NAME": "Hanumanthacharyulu",
    "PLACE": "L.B.Nagar",
    "AMOUNT": "₹ 5,000",
    "DATE": "",
    "RECEIPT": "14/338"
  },
  {
    "SNO": "160",
    "TITLE": "Shri.",
    "SURNAME": "Vedantam",
    "NAME": "Ranganadhacharyulu",
    "PLACE": "Vanasthalipuram",
    "AMOUNT": "₹ 5,000",
    "DATE": "",
    "RECEIPT": "14/347"
  },
  {
    "SNO": "161",
    "TITLE": "Shri.",
    "SURNAME": "",
    "NAME": "S.Ranganadh",
    "PLACE": "Vanasthalipuram",
    "AMOUNT": "₹ 5,000",
    "DATE": "",
    "RECEIPT": "15/351"
  },
  {
    "SNO": "162",
    "TITLE": "Shri.",
    "SURNAME": "",
    "NAME": "V.Venkata RangaChary",
    "PLACE": "Malkajgiri",
    "AMOUNT": "₹ 5,000",
    "DATE": "",
    "RECEIPT": "15/353"
  },
  {
    "SNO": "163",
    "TITLE": "Shri.",
    "SURNAME": "",
    "NAME": "G.Raghunadh",
    "PLACE": "Alwal",
    "AMOUNT": "₹ 5,000",
    "DATE": "",
    "RECEIPT": "15/355"
  },
  {
    "SNO": "164",
    "TITLE": "Shri.",
    "SURNAME": "Angara",
    "NAME": "Sairam",
    "PLACE": "Pragathi Nagar",
    "AMOUNT": "₹ 5,000",
    "DATE": "",
    "RECEIPT": "15/362"
  },
  {
    "SNO": "165",
    "TITLE": "Shri.",
    "SURNAME": "Sudarsanam",
    "NAME": "GopalaCharyulu",
    "PLACE": "Attapur",
    "AMOUNT": "₹ 5,000",
    "DATE": "",
    "RECEIPT": "15/365"
  },
  {
    "SNO": "166",
    "TITLE": "Shri.",
    "SURNAME": "Agnihotram",
    "NAME": "VenkataCharyulu",
    "PLACE": "Attapur",
    "AMOUNT": "₹ 5,000",
    "DATE": "",
    "RECEIPT": "15/367"
  },
  {
    "SNO": "167",
    "TITLE": "Shri.",
    "SURNAME": "",
    "NAME": "A.V Ramana ",
    "PLACE": "A.S.Rao Nagar",
    "AMOUNT": "₹ 5,000",
    "DATE": "",
    "RECEIPT": "15/370"
  },
  {
    "SNO": "168",
    "TITLE": "Shri.",
    "SURNAME": "Devayajanam",
    "NAME": "Sridhara Chakravarthy",
    "PLACE": "Vanasthalipuram",
    "AMOUNT": "₹ 5,000",
    "DATE": "",
    "RECEIPT": ""
  },
  {
    "SNO": "169",
    "TITLE": "Shri.",
    "SURNAME": "Narayanam",
    "NAME": "SrinivasaMurty",
    "PLACE": "Kharmanghat",
    "AMOUNT": "₹ 5,000",
    "DATE": "",
    "RECEIPT": "17/402"
  },
  {
    "SNO": "170",
    "TITLE": "Shri.",
    "SURNAME": "Deevi",
    "NAME": "Srinivasa Murthy",
    "PLACE": "Jillelaguda",
    "AMOUNT": "₹ 5,000",
    "DATE": "",
    "RECEIPT": "14/333"
  },
  {
    "SNO": "171",
    "TITLE": "Shri.",
    "SURNAME": "Noori",
    "NAME": "Subhramanya Sastri",
    "PLACE": "HMT Nagar",
    "AMOUNT": "₹ 5,000",
    "DATE": "",
    "RECEIPT": "13/311"
  },
  {
    "SNO": "172",
    "TITLE": "Shri.",
    "SURNAME": "Sribhashyam",
    "NAME": "Krishna Prasad",
    "PLACE": "Saroornagar",
    "AMOUNT": "₹ 5,000",
    "DATE": "",
    "RECEIPT": ""
  },
  {
    "SNO": "173",
    "TITLE": "Shri.",
    "SURNAME": "",
    "NAME": "S. Vijaya Sai",
    "PLACE": "Saroornagar",
    "AMOUNT": "₹ 5,000",
    "DATE": "",
    "RECEIPT": "17/405"
  },
  {
    "SNO": "174",
    "TITLE": "Shri.",
    "SURNAME": "Deevi",
    "NAME": "V VaradaCharyulu",
    "PLACE": "Dilshuknagar",
    "AMOUNT": "₹ 5,000",
    "DATE": "26/04/2015",
    "RECEIPT": "17/410"
  },
  {
    "SNO": "175",
    "TITLE": "Shri.",
    "SURNAME": "Sribhashyam",
    "NAME": "Vijaya Saradhi",
    "PLACE": "Saroornagar",
    "AMOUNT": "₹ 5,000",
    "DATE": "",
    "RECEIPT": ""
  },
  {
    "SNO": "176",
    "TITLE": "Shri.",
    "SURNAME": "Deevi",
    "NAME": "Srinivasulacharyulu  ",
    "PLACE": "A.S.Rao Nagar",
    "AMOUNT": "₹ 5,000",
    "DATE": "",
    "RECEIPT": ""
  },
  {
    "SNO": "177",
    "TITLE": "Shri.",
    "SURNAME": "Narayanam",
    "NAME": "Satya Deva Vara Prasad",
    "PLACE": "",
    "AMOUNT": "₹ 5,000",
    "DATE": "20/11/2016",
    "RECEIPT": "5/120"
  },
  {
    "SNO": "178",
    "TITLE": "Shri.",
    "SURNAME": "Agnihotram",
    "NAME": "Peda SeshaCharyulu",
    "PLACE": "Jagannadapuram",
    "AMOUNT": "₹ 5,000",
    "DATE": "30/09/2018",
    "RECEIPT": "2/36"
  },
  {
    "SNO": "179",
    "TITLE": "Shri.",
    "SURNAME": "Govardhanam",
    "NAME": "Krishnama Charyulu",
    "PLACE": "AS Roa Nagar",
    "AMOUNT": "₹ 5,000",
    "DATE": "16/08/2019",
    "RECEIPT": "2/48"
  },
  {
    "SNO": "180",
    "TITLE": "Shri.",
    "SURNAME": "V",
    "NAME": "V Bhaskara Charyulu",
    "PLACE": "Miyapur",
    "AMOUNT": "₹ 5,000",
    "DATE": "08/12/2019",
    "RECEIPT": "17/420"
  },
  {
    "SNO": "181",
    "TITLE": "Shri",
    "SURNAME": "",
    "NAME": "Samara Janardhan",
    "PLACE": "",
    "AMOUNT": "₹ 5,000",
    "DATE": "20/11/2022",
    "RECEIPT": "12/288"
  },
  {
    "SNO": "182",
    "TITLE": "Shri.",
    "SURNAME": "Sudarsanam",
    "NAME": "Venkata Satyanarayana Charyulu",
    "PLACE": "",
    "AMOUNT": "₹ 5,000",
    "DATE": "17/01/2023",
    "RECEIPT": "12/292"
  },
  {
    "SNO": "183",
    "TITLE": "Shri.",
    "SURNAME": "Peddinti",
    "NAME": "L N Prasad",
    "PLACE": "Bachupalli",
    "AMOUNT": "₹ 3,004",
    "DATE": "08/12/2019",
    "RECEIPT": "17/422"
  },
  {
    "SNO": "184",
    "TITLE": "Shri.",
    "SURNAME": "Vadapalli",
    "NAME": "Buchibabu",
    "PLACE": "Antharvedi (East Godavari Dist)",
    "AMOUNT": "₹ 3,001",
    "DATE": "29/08/2015",
    "RECEIPT": "11/265"
  },
  {
    "SNO": "185",
    "TITLE": "Shri.",
    "SURNAME": "",
    "NAME": "L.Sundarayya",
    "PLACE": "Mahadeva hardware",
    "AMOUNT": "₹ 3,000",
    "DATE": "",
    "RECEIPT": "14/346"
  },
  {
    "SNO": "186",
    "TITLE": "Shri.",
    "SURNAME": "",
    "NAME": "K.Praveen ",
    "PLACE": "Kukatpally",
    "AMOUNT": "₹ 3,000",
    "DATE": "",
    "RECEIPT": "15/360"
  },
  {
    "SNO": "187",
    "TITLE": "Shri.",
    "SURNAME": "",
    "NAME": "P.Gopalaswamy",
    "PLACE": "Attapur",
    "AMOUNT": "₹ 3,000",
    "DATE": "",
    "RECEIPT": "11/258"
  },
  {
    "SNO": "188",
    "TITLE": "Shri.",
    "SURNAME": "Peddinti",
    "NAME": "Ananthacharyulu in memory of Bhakaramma",
    "PLACE": "TKR Nagar",
    "AMOUNT": "₹ 3,000",
    "DATE": "07/08/2017",
    "RECEIPT": "2/30"
  },
  {
    "SNO": "189",
    "TITLE": "Shri.",
    "SURNAME": "Peddinti",
    "NAME": "Venkata Hygreeva Charyulu",
    "PLACE": "Hyderabad",
    "AMOUNT": "₹ 3,000",
    "DATE": "15/08/2019",
    "RECEIPT": "11/274, 2/45"
  },
  {
    "SNO": "190",
    "TITLE": "Shri.",
    "SURNAME": "Deevi",
    "NAME": "PadmanabhaCharyulu",
    "PLACE": "Danadayaal nagar",
    "AMOUNT": "₹ 2,500",
    "DATE": "",
    "RECEIPT": "14/343"
  },
  {
    "SNO": "191",
    "TITLE": "Shri.",
    "SURNAME": "Agnihotram",
    "NAME": "UmashankaraCharyulu",
    "PLACE": "charminar",
    "AMOUNT": "₹ 2,016",
    "DATE": "",
    "RECEIPT": ""
  },
  {
    "SNO": "192",
    "TITLE": "Shri.",
    "SURNAME": "",
    "NAME": "P.Satyanarayana",
    "PLACE": "Nandhyala",
    "AMOUNT": "₹ 2,000",
    "DATE": "",
    "RECEIPT": "8/183"
  },
  {
    "SNO": "193",
    "TITLE": "Shri.",
    "SURNAME": "Rompicherla",
    "NAME": "Rama Krishnamacharyulu",
    "PLACE": "Vanasthalipuram",
    "AMOUNT": "₹ 2,000",
    "DATE": "",
    "RECEIPT": "13/304"
  },
  {
    "SNO": "194",
    "TITLE": "Shri.",
    "SURNAME": "Revuri",
    "NAME": "GopalaCharyulu",
    "PLACE": "Moosarambagh",
    "AMOUNT": "₹ 2,000",
    "DATE": "",
    "RECEIPT": "11/251, 14/339"
  },
  {
    "SNO": "195",
    "TITLE": "Shri.",
    "SURNAME": "",
    "NAME": "G.A.P  Prasad",
    "PLACE": "Alwal",
    "AMOUNT": "₹ 2,000",
    "DATE": "",
    "RECEIPT": ""
  },
  {
    "SNO": "196",
    "TITLE": "Shri.",
    "SURNAME": "",
    "NAME": "G.M Sarath Kumar",
    "PLACE": "Yapral",
    "AMOUNT": "₹ 2,000",
    "DATE": "",
    "RECEIPT": ""
  },
  {
    "SNO": "197",
    "TITLE": "Shri.",
    "SURNAME": "Agnihotram",
    "NAME": "Laxmana Singara Charyulu",
    "PLACE": "Panjagutta",
    "AMOUNT": "₹ 2,000",
    "DATE": "06/12/2015",
    "RECEIPT": "11/273"
  },
  {
    "SNO": "198",
    "TITLE": "Shri.",
    "SURNAME": "Deevi",
    "NAME": "Vijaya Rambabu",
    "PLACE": "Vanasthalipuram",
    "AMOUNT": "₹ 2,000",
    "DATE": "12/08/2022",
    "RECEIPT": "12/283"
  },
  {
    "SNO": "199",
    "TITLE": "Shri.",
    "SURNAME": "Deevi",
    "NAME": "Sita Ramacharyulu",
    "PLACE": "Guntur",
    "AMOUNT": "₹ 2,000",
    "DATE": "12/08/2022",
    "RECEIPT": "12/284"
  },
  {
    "SNO": "200",
    "TITLE": "Shri.",
    "SURNAME": "",
    "NAME": "K.Murali Mohan",
    "PLACE": "Nallakunta",
    "AMOUNT": "₹ 1,120",
    "DATE": "29/08/2015",
    "RECEIPT": "11/269"
  },
  {
    "SNO": "201",
    "TITLE": "Shri.",
    "SURNAME": "Brindavanam",
    "NAME": "Sri Ramachakravarty",
    "PLACE": "HighCourt Colony",
    "AMOUNT": "₹ 1,116",
    "DATE": "",
    "RECEIPT": "14/348"
  },
  {
    "SNO": "202",
    "TITLE": "Shri.",
    "SURNAME": "Deevi",
    "NAME": "Vijaya Saradhi",
    "PLACE": "Moulali",
    "AMOUNT": "₹ 1,116",
    "DATE": "",
    "RECEIPT": "15/373"
  },
  {
    "SNO": "203",
    "TITLE": "Shri.",
    "SURNAME": "Khandavalli",
    "NAME": "Mangacharyulu",
    "PLACE": "Madduru",
    "AMOUNT": "₹ 1,116",
    "DATE": "",
    "RECEIPT": "13/307"
  },
  {
    "SNO": "204",
    "TITLE": "Shri.",
    "SURNAME": "Khandavalli",
    "NAME": "Chaitanya",
    "PLACE": "Moulali",
    "AMOUNT": "₹ 1,116",
    "DATE": "",
    "RECEIPT": ""
  },
  {
    "SNO": "205",
    "TITLE": "Shri.",
    "SURNAME": "Peddinti",
    "NAME": "Sarath Chandra ",
    "PLACE": "A.S.Rao Nagar",
    "AMOUNT": "₹ 1,116",
    "DATE": "",
    "RECEIPT": ""
  },
  {
    "SNO": "206",
    "TITLE": "Shri.",
    "SURNAME": "Vedagiri",
    "NAME": "Ananta Kodanda Ramacharyulu",
    "PLACE": "",
    "AMOUNT": "₹ 1,116",
    "DATE": "20/11/2022",
    "RECEIPT": "12/286"
  },
  {
    "SNO": "207",
    "TITLE": "Shri.",
    "SURNAME": "Deevi",
    "NAME": "Sridhar",
    "PLACE": "A.S.Rao Nagar",
    "AMOUNT": "₹ 1,016",
    "RECEIPT": "5/113"
  },
  {
    "SNO": "208",
    "TITLE": "Shri.",
    "SURNAME": "Pulipaka",
    "NAME": "MuraliKrishna",
    "PLACE": "A.S.Rao Nagar",
    "AMOUNT": "₹ 1,011",
    "RECEIPT": "15/369"
  },
  {
    "SNO": "209",
    "TITLE": "Shri.",
    "SURNAME": "Vadapalli",
    "NAME": "Vijaya Kiran",
    "PLACE": "Vijayapuri Colony",
    "AMOUNT": "₹ 1,001",
    "RECEIPT": "5/105"
  },
  {
    "SNO": "210",
    "TITLE": "Shri.",
    "SURNAME": "",
    "NAME": "K.Ramesh ",
    "PLACE": "Kukatpally",
    "AMOUNT": "₹ 1,001",
    "RECEIPT": "15/359"
  },
  {
    "SNO": "211",
    "TITLE": "Smt. Dr.",
    "SURNAME": "",
    "NAME": "Shakthirai Mitra",
    "PLACE": "Kukatpally",
    "AMOUNT": "₹ 1,001",
    "RECEIPT": "15/374"
  },
  {
    "SNO": "212",
    "TITLE": "Smt.",
    "SURNAME": "",
    "NAME": "N.Lalitha",
    "PLACE": "Kukatpally",
    "AMOUNT": "₹ 1,001",
    "RECEIPT": "15/375"
  },
  {
    "SNO": "213",
    "TITLE": "Shri.",
    "SURNAME": "Govardhanam",
    "NAME": "Trinadh Ramesh ",
    "PLACE": "Attapur",
    "AMOUNT": "₹ 1,000",
    "RECEIPT": "11/259"
  },
  {
    "SNO": "214",
    "TITLE": "Shri.",
    "SURNAME": "Rompicherla",
    "NAME": "Jagannadha Krishnamacharyulu",
    "PLACE": "Vanasthalipuram",
    "AMOUNT": "₹ 1,000",
    "DATE": "11/06/2015",
    "RECEIPT": "17/411"
  },
  {
    "SNO": "215",
    "TITLE": "Shri.",
    "SURNAME": "",
    "NAME": "P.Shobanadri",
    "PLACE": "Hyderabad",
    "AMOUNT": "₹ 520",
    "DATE": "29/08/2015",
    "RECEIPT": "11/267"
  },
  {
    "SNO": "216",
    "TITLE": "Shri.",
    "SURNAME": "",
    "NAME": "G.Naaga Venkata Pavan Kumar",
    "PLACE": "Kamala Nagar",
    "AMOUNT": "₹ 501",
    "RECEIPT": "14/349"
  },
  {
    "SNO": "217",
    "TITLE": "Shri.",
    "SURNAME": "Khandavalli",
    "NAME": "RadhaKrishna Murty",
    "PLACE": "Tanuku, W.Godavari",
    "AMOUNT": "₹ 500",
    "DATE": "15/08/2019",
    "RECEIPT": "2/43"
  },
  {
    "SNO": "218",
    "TITLE": "Shri.",
    "SURNAME": "Angara",
    "NAME": "Lakshmi Narasimha Charyulu",
    "PLACE": "East Godavari",
    "AMOUNT": "₹ 120",
    "DATE": "29/08/2015",
    "RECEIPT": "11/270"
  }
];

const itemsGridColumns = [
  { name: "SNO", header: "Sno", minWidth: 10, maxWidth: 70, defaultFlex: 1 },
  { name: "NAME", header: "Name", minWidth: 300, defaultFlex: 1, render: ({ data }) => data.TITLE + ' ' + data.SURNAME + ' ' + data.NAME, type: 'string' },
  { name: "PLACE", header: "Place", minWidth: 300, maxWidth: 1000, defaultFlex: 1 },
  { name: "ITEM", header: "Item", minWidth: 300, maxWidth: 500, defaultFlex: 1, },
  //{ name: "IMG", header: "Image", maxWidth: 1000, defaultFlex: 1, render: ({data}) => data.IMG },  
];

const filterItemDonorValue = [
  { name: 'NAME', operator: 'contains', type: 'string', value: '' },
  { name: 'ITEM', operator: 'gte', type: 'number', value: '' },
  { name: 'PLACE', operator: 'contains', type: 'string', value: '' },
  // { name: 'DATE', operator: 'after', type: 'date', value: '' },
  // { name: 'RECEIPT', operator: 'after', type: 'string', value: '' },
];

const itemsDonorsList = [
    {
    "SNO":1,
    "TITLE":"Shri.",
    "SURNAME":"Ganjam",
    "NAME":"Ashok Babu",
    "PLACE":"DeendayalNagar",
    "ITEM":"150 - Drinking Steel Glasses, 75 - Steel Coffee Glasses",
    "IMG":"img/ashramam/glasses.jpg"
    }
    ,{
    "SNO":2,
    "TITLE":"Shri.",
    "SURNAME":"Deevi",
    "NAME":"Madhusudhan Prasad",
    "PLACE":"Nizampet",
    "ITEM":"150 - Steel Lunch Plates, 4 - Steel Dishes, 3 - Steel Buckets",
    "IMG":"assets/img/ashramam/platesanddishes.jpg"
    }
    ,{
    "SNO":3,
    "TITLE":"Shri.",
    "SURNAME":"Deevi",
    "NAME":"Yogananda Narasimha Deekshitulu",
    "PLACE":"GayatriNagar",
    "ITEM":"9 - Aluminium Big Vessels with Covering Plates",
    "IMG":"assets/img/ashramam/Vessels.jpg"
    }
    ,{
    "SNO":4,
    "TITLE":"Shri.",
    "SURNAME":"Deevi",
    "NAME":"Srinivasa Murthy",
    "PLACE":"GayatriNagar",
    "ITEM":"Big Stove (2 Burner)",
    "IMG":"assets/img/ashramam/stove.jpg"
    }
    ,{
    "SNO":5,
    "TITLE":"Shri.",
    "SURNAME":"Agnihotram",
    "NAME":"Ramanand",
    "PLACE":"Nalagandla",
    "ITEM":"10 - Serving Buckets, 10 - Water Jugs",
    "IMG":"assets/img/ashramam/bucketsandjugs.jpg"
    }
    ,{
    "SNO":6,
    "TITLE":"Shri.",
    "SURNAME":"Srinivasula",
    "NAME":"Ramachandra  charyulu",
    "PLACE":"Gayatrinagar, Moulali",
    "ITEM":"3 - Stainless Steel Dining Table",
    "IMG":"assets/img/ashramam/noimage.jpg"
    }
    ,{
    "SNO":7,
    "TITLE":"Shri.",
    "SURNAME":"Deevi",
    "NAME":"S L Narasinhacharyulu",
    "PLACE":"Alwal",
    "ITEM":"3 - Stainless Steel Dining Table",
    "IMG":"assets/img/ashramam/noimage.jpg"
    }
    ,{
    "SNO":8,
    "TITLE":"Shri.",
    "SURNAME":"Vadapalli",
    "NAME":"SridharaCharyulu",
    "PLACE":"Kondapur, Ghatkesar",
    "ITEM":"3 - Stainless Steel Dining Table",
    "IMG":"assets/img/ashramam/noimage.jpg"
    }
    ,{
    "SNO":9,
    "TITLE":"Shri.",
    "SURNAME":"Sudarshanam",
    "NAME":"SatyanarayanaCharyulu",
    "PLACE":"Vijayapuri Colony",
    "ITEM":"3 - Stainless Steel Dining Table",
    "IMG":"assets/img/ashramam/noimage.jpg"
    }
    ,{
    "SNO":10,
    "TITLE":"Shri.",
    "SURNAME":"Muttevi",
    "NAME":"Ravikumar NarasimhaCharyulu",
    "PLACE":"HMT Nagar",
    "ITEM":"4 - Aluminium Big Cooking Vessel with lid",
    "IMG":"assets/img/ashramam/noimage.jpg"
    }
    ,{
    "SNO":11,
    "TITLE":"Shri.",
    "SURNAME":"Vadapalli",
    "NAME":"Sudhakar",
    "PLACE":"HMT Nagar",
    "ITEM":"3 - Aluminium Big Cooking Vessel with lid",
    "IMG":"assets/img/ashramam/noimage.jpg"
    }
    ,{
    "SNO":12,
    "TITLE":"Shri.",
    "SURNAME":"Vedantam",
    "NAME":"Raghava Deekshitulu",
    "PLACE":"Boduppal",
    "ITEM":"15 - Stainless Steel Basins",
    "IMG":"assets/img/ashramam/noimage.jpg"
    }
    ,{
    "SNO":13,
    "TITLE":"Shri.",
    "SURNAME":"Pedapudi",
    "NAME":"KrishnamaCharyulu",
    "PLACE":"Sarada Nagar",
    "ITEM":"1 - Steel Almara, 1 - Aluminium Vessel with lid",
    "IMG":"assets/img/ashramam/noimage.jpg"
    }
    ,{
    "SNO":14,
    "TITLE":"Shri.",
    "SURNAME":"Deevi",
    "NAME":"Surendra Bhishek",
    "PLACE":"Vanasthalipuram",
    "ITEM":"1 - Computer, 1 - Computer Table",
    "IMG":"assets/img/ashramam/noimage.jpg"
    }
    ,{
    "SNO":15,
    "TITLE":"Shri.",
    "SURNAME":"R",
    "NAME":"Parthasarathi",
    "PLACE":"",
    "ITEM":"1 - Aluminium Big Cooking Vessel with lid",
    "IMG":"assets/img/ashramam/noimage.jpg"
    }
    ,{
    "SNO":16,
    "TITLE":"Shri.",
    "SURNAME":"B",
    "NAME":"Vedadri",
    "PLACE":"",
    "ITEM":"1 - Aluminium Big Cooking Vessel with lid",
    "IMG":"assets/img/ashramam/noimage.jpg"
    }
    ,{
    "SNO":17,
    "TITLE":"Shri.",
    "SURNAME":"K",
    "NAME":"Prabhakaracharyulu & Friends",
    "PLACE":"",
    "ITEM":"1 - Mike Set",
    "IMG":"assets/img/ashramam/noimage.jpg"
    }
    ,{
    "SNO":18,
    "TITLE":"Shri.",
    "SURNAME":"Agnihotram",
    "NAME":"Kishore",
    "PLACE":"",
    "ITEM":"1 - Tea Flask",
    "IMG":"assets/img/ashramam/noimage.jpg"
    }
    ,{
    "SNO":19,
    "TITLE":"Shri.",
    "SURNAME":"Deevi",
    "NAME":"Sarangapani Iyengar",
    "PLACE":"Bhavani Nagar",
    "ITEM":"6 - Chairs",
    "IMG":"assets/img/ashramam/noimage.jpg"
    }
    ,{
    "SNO":20,
    "TITLE":"Shri.",
    "SURNAME":"P",
    "NAME":"Gopala Krishna",
    "PLACE":"",
    "ITEM":"6 - Chairs",
    "IMG":"assets/img/ashramam/noimage.jpg"
    }
    ,{
    "SNO":21,
    "TITLE":"",
    "SURNAME":"",
    "NAME":"Nirmala (Bharat Gas)",
    "PLACE":"",
    "ITEM":"1 - Gas Cylinder",
    "IMG":"assets/img/ashramam/noimage.jpg"
    }
    ,{
    "SNO":22,
    "TITLE":"",
    "SURNAME":"",
    "NAME":"Ashramam existing old items",
    "PLACE":"",
    "ITEM":"9 - Steel Buckets, 2 - Chairs, 2 - Dustbin Drums, 99 - Glasses, 2 - Steel Water Jugs, 1 - Strainer Bowl, 2 - Tables, 2 - Water Drums, 4 - Water Cans, 1 - Aluminium Vessel with lid, 14 - Garitelu",
    "IMG":"assets/img/ashramam/noimage.jpg"
    }
    ];

function AshramamDonors() {
  return (
    <>
      <div className="cd-section" id="ashramamdonors">
        <div className="team-1">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <h2 className="title">Sri Vaikhanasa Ashramam, Hyderabad - Donors List</h2>
                <h4>
                  Following are the list of donors who helped us in realizing dream of building our own “Sri Vaikhanasa Ashramam” at Hyderabad.
                  <br/><br/>
                  Following are the bank details for donating funds towards Ashramam Development:<br/><br/>
                  <div className="accountDetails">
                    <b>Name : </b> AP SRI VAIKHANASA MAHA MANDALI<br/>
                    <b>Bank Name : </b> Union Bank Of India, Tarnaka Branch, Hyderabad<br/>
                    <b>A/C No : </b> 057810011018048 <br />
                    <b>IFSC Code : </b> UBIN0805785<br/>
                  </div>
                </h4>
                <br/><br/>
                <ReactDataGrid
                  idProperty="id"
                  columns={donorsColumns}
                  dataSource={dataSource}
                  style={gridStyle}
                  defaultFilterValue={filterDonorValue}
                />                
              </Col>
            </Row>     
            <Row>
              <Col className="ml-auto mr-auto text-center" md="12">
                <br/><br/>                
                <h4>
                  Following are the items that are donated to Sri Vikhanasa Ashramam, Hyderabad.
                </h4>
                <ReactDataGrid
                  idProperty="id"
                  columns={itemsGridColumns}
                  dataSource={itemsDonorsList}
                  style={gridStyle}
                  defaultFilterValue={filterItemDonorValue}
                />                
              </Col>
            </Row>    
            <Row>
              
            </Row>      
          </Container>
        </div>
      </div>
    </>
  );
}

export default AshramamDonors;
