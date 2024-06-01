"use client";
import { FunctionComponent, useCallback, useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Card from "./sub-components/Card";
import SortIcon from "@mui/icons-material/Sort";
import {
  Autocomplete,
  Checkbox,
  FormControlLabel,
  FormLabel,
  IconButton,
  Input,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { getAllInstitutions } from "@/utils/getInstitution";
import { useCalculateFontSize } from "../../hooks/use-calculate-font-size";
import { fetchData } from "@/app/(app)/services/institution";
import { debounce, set } from "lodash";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useSearchParams } from "next/navigation";
import { addBookmarkInstitutionByUserId } from "../../services/bookmark";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { orange } from "@mui/material/colors";
const x = [
  {
    id: 723,
    city_name: "Uttar Dinajpur (North Dinajpur)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 722,
    city_name: "South 24 Parganas",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 721,
    city_name: "Purulia",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 720,
    city_name: "Purba Medinipur (East Medinipur)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 719,
    city_name: "Paschim Medinipur (West Medinipur)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 718,
    city_name: "North 24 Parganas",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 717,
    city_name: "Nadia",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 716,
    city_name: "Murshidabad",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 715,
    city_name: "Malda",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 714,
    city_name: "Kolkata",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 713,
    city_name: "Kalimpong",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 712,
    city_name: "Jalpaiguri",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 711,
    city_name: "Howrah",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 710,
    city_name: "Hooghly",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 709,
    city_name: "Darjeeling",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 708,
    city_name: "Dakshin Dinajpur (South Dinajpur)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 707,
    city_name: "Cooch Behar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 706,
    city_name: "Burdwan (Bardhaman)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 705,
    city_name: "Birbhum",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 704,
    city_name: "Bankura",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 703,
    city_name: "Alipurduar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 702,
    city_name: "Varanas",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 701,
    city_name: "Unnao",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 700,
    city_name: "Sultanpur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 699,
    city_name: "Sonbhadra",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 698,
    city_name: "Sitapur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 697,
    city_name: "Siddharth Nagar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 696,
    city_name: "Shravasti",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 695,
    city_name: "Shamali (Prabuddh Nagar)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 694,
    city_name: "Shahjahanpur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 693,
    city_name: "Sant Kabir Nagar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 692,
    city_name: "Sambhal (Bhim Nagar)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 691,
    city_name: "Saharanpur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 690,
    city_name: "Rampur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 668,
    city_name: "Jhansi",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 669,
    city_name: "Kannauj",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 670,
    city_name: "Kanpur Dehat",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 671,
    city_name: "Kanpur Nagar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 672,
    city_name: "Kanshiram Nagar (Kasganj)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 673,
    city_name: "Kaushambi",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 674,
    city_name: "Kushinagar (Padrauna)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 675,
    city_name: "Lakhimpur - Kheri",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 676,
    city_name: "Lalitpur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 677,
    city_name: "Lucknow",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 678,
    city_name: "Maharajganj",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 679,
    city_name: "Mahoba",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 680,
    city_name: "Mainpuri",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 681,
    city_name: "Mathura",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 682,
    city_name: "Mau",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 683,
    city_name: "Meerut",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 684,
    city_name: "Mirzapur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 685,
    city_name: "Moradabad",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 686,
    city_name: "Muzaffarnagar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 687,
    city_name: "Pilibhit",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 688,
    city_name: "Pratapgarh",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 689,
    city_name: "RaeBareli",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 446,
    city_name: "Peren",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 447,
    city_name: "Phek",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 448,
    city_name: "Tuensang",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 449,
    city_name: "Wokha",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 450,
    city_name: "Zunhebot",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 451,
    city_name: "Angul",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 452,
    city_name: "Balangir",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 453,
    city_name: "Balasore",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 454,
    city_name: "Bargarh",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 455,
    city_name: "Bhadrak",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 456,
    city_name: "Boudh",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 457,
    city_name: "Cuttack",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 458,
    city_name: "Deogarh",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 459,
    city_name: "Dhenkanal",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 460,
    city_name: "Gajapati",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 461,
    city_name: "Ganjam",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 462,
    city_name: "Jagatsinghapur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 463,
    city_name: "Jajpur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 464,
    city_name: "Jharsuguda",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 465,
    city_name: "Kalahandi",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 466,
    city_name: "Kandhamal",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 467,
    city_name: "Kendrapara",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 468,
    city_name: "Kendujhar (Keonjhar)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 469,
    city_name: "Khordha",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 470,
    city_name: "Koraput",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 471,
    city_name: "Malkangiri",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 472,
    city_name: "Mayurbhanj",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 473,
    city_name: "Nabarangpur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 474,
    city_name: "Nayagarh",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 475,
    city_name: "Nuapada",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 476,
    city_name: "Puri",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 477,
    city_name: "Rayagada",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 478,
    city_name: "Sambalpur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 479,
    city_name: "Sonepur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 480,
    city_name: "Sundargar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 481,
    city_name: "Karaikal",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 482,
    city_name: "Mahe",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 483,
    city_name: "Pondicherry",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 484,
    city_name: "Yana",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 485,
    city_name: "Amritsar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 486,
    city_name: "Barnala",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 487,
    city_name: "Bathinda",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 488,
    city_name: "Faridkot",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 489,
    city_name: "Fatehgarh Sahib",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 490,
    city_name: "Fazilka",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 491,
    city_name: "Ferozepur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 492,
    city_name: "Gurdaspur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 493,
    city_name: "Hoshiarpur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 494,
    city_name: "Jalandhar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 495,
    city_name: "Kapurthala",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 496,
    city_name: "Ludhiana",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 497,
    city_name: "Mansa",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 498,
    city_name: "Moga",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 499,
    city_name: "Muktsar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 500,
    city_name: "Nawanshahr (Shahid Bhagat Singh Nagar)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 501,
    city_name: "Pathankot",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 502,
    city_name: "Patiala",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 503,
    city_name: "Rupnagar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 504,
    city_name: "Sahibzada Ajit Singh Nagar (Mohali)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 505,
    city_name: "Sangrur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 506,
    city_name: "Tarn Tara",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 507,
    city_name: "Ajmer",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 508,
    city_name: "Alwar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 509,
    city_name: "Banswara",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 510,
    city_name: "Baran",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 511,
    city_name: "Barmer",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 512,
    city_name: "Bharatpur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 513,
    city_name: "Bhilwara",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 514,
    city_name: "Bikaner",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 515,
    city_name: "Bundi",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 516,
    city_name: "Chittorgarh",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 517,
    city_name: "Churu",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 518,
    city_name: "Dausa",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 519,
    city_name: "Dholpur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 520,
    city_name: "Dungarpur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 521,
    city_name: "Hanumangarh",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 522,
    city_name: "Jaipur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 523,
    city_name: "Jaisalmer",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 524,
    city_name: "Jalore",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 525,
    city_name: "Jhalawar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 526,
    city_name: "Jhunjhunu",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 527,
    city_name: "Jodhpur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 528,
    city_name: "Karauli",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 529,
    city_name: "Kota",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 530,
    city_name: "Nagaur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 531,
    city_name: "Pali",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 532,
    city_name: "Pratapgarh",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 533,
    city_name: "Rajsamand",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 534,
    city_name: "Sawai Madhopur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 535,
    city_name: "Sikar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 536,
    city_name: "Sirohi",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 537,
    city_name: "Sri Ganganagar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 538,
    city_name: "Tonk",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 539,
    city_name: "Udaipu",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 540,
    city_name: "East Sikkim",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 541,
    city_name: "North Sikkim",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 542,
    city_name: "South Sikkim",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 543,
    city_name: "West Sikki",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 544,
    city_name: "Ariyalur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 545,
    city_name: "Chennai",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 546,
    city_name: "Coimbatore",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 547,
    city_name: "Cuddalore",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 548,
    city_name: "Dharmapuri",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 549,
    city_name: "Dindigul",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 550,
    city_name: "Erode",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 551,
    city_name: "Kanchipuram",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 552,
    city_name: "Kanyakumari",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 553,
    city_name: "Karur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 554,
    city_name: "Krishnagiri",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 555,
    city_name: "Madurai",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 556,
    city_name: "Nagapattinam",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 557,
    city_name: "Namakkal",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 558,
    city_name: "Nilgiris",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 559,
    city_name: "Perambalur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 560,
    city_name: "Pudukkottai",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 561,
    city_name: "Ramanathapuram",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 562,
    city_name: "Salem",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 563,
    city_name: "Sivaganga",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 564,
    city_name: "Thanjavur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 565,
    city_name: "Theni",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 566,
    city_name: "Thoothukudi (Tuticorin)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 567,
    city_name: "Tiruchirappalli",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 568,
    city_name: "Tirunelveli",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 569,
    city_name: "Tiruppur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 570,
    city_name: "Tiruvallur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 571,
    city_name: "Tiruvannamalai",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 572,
    city_name: "Tiruvarur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 573,
    city_name: "Vellore",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 574,
    city_name: "Viluppuram",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 575,
    city_name: "Virudhunaga",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 576,
    city_name: "Adilabad",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 577,
    city_name: "Bhadradri Kothagudem",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 578,
    city_name: "Hyderabad",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 579,
    city_name: "Jagtial",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 580,
    city_name: "Jangaon",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 581,
    city_name: "Jayashankar Bhoopalpally",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 582,
    city_name: "Jogulamba Gadwal",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 583,
    city_name: "Kamareddy",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 584,
    city_name: "Karimnagar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 585,
    city_name: "Khammam",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 586,
    city_name: "Komaram Bheem Asifabad",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 587,
    city_name: "Mahabubabad",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 588,
    city_name: "Mahabubnagar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 589,
    city_name: "Mancherial",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 590,
    city_name: "Medak",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 591,
    city_name: "Medchal",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 592,
    city_name: "Nagarkurnool",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 593,
    city_name: "Nalgonda",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 594,
    city_name: "Nirmal",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 595,
    city_name: "Nizamabad",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 596,
    city_name: "Peddapalli",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 597,
    city_name: "Rajanna Sircilla",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 598,
    city_name: "Rangareddy",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 599,
    city_name: "Sangareddy",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 600,
    city_name: "Siddipet",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 601,
    city_name: "Suryapet",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 602,
    city_name: "Vikarabad",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 603,
    city_name: "Wanaparthy",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 604,
    city_name: "Warangal (Rural)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 605,
    city_name: "Warangal (Urban)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 606,
    city_name: "Yadadri Bhuvanagir",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 607,
    city_name: "Dhalai",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 608,
    city_name: "Gomati",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 609,
    city_name: "Khowai",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 610,
    city_name: "North Tripura",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 611,
    city_name: "Sepahijala",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 612,
    city_name: "South Tripura",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 613,
    city_name: "Unakoti",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 614,
    city_name: "West Tripur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 615,
    city_name: "Almora",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 616,
    city_name: "Bageshwar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 617,
    city_name: "Chamoli",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 618,
    city_name: "Champawat",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 619,
    city_name: "Dehradun",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 620,
    city_name: "Haridwar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 621,
    city_name: "Nainital",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 622,
    city_name: "Pauri Garhwal",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 623,
    city_name: "Pithoragarh",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 624,
    city_name: "Rudraprayag",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 625,
    city_name: "Tehri Garhwal",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 626,
    city_name: "Udham Singh Nagar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 627,
    city_name: "Uttarkash",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 628,
    city_name: "Agra",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 629,
    city_name: "Aligarh",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 630,
    city_name: "Allahabad",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 631,
    city_name: "Ambedkar Nagar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 632,
    city_name: "Amethi (Chatrapati Sahuji Mahraj Nagar)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 633,
    city_name: "Amroha (J.P. Nagar)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 634,
    city_name: "Auraiya",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 635,
    city_name: "Azamgarh",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 636,
    city_name: "Baghpat",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 637,
    city_name: "Bahraich",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 638,
    city_name: "Ballia",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 639,
    city_name: "Balrampur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 640,
    city_name: "Banda",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 641,
    city_name: "Barabanki",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 642,
    city_name: "Bareilly",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 643,
    city_name: "Basti",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 644,
    city_name: "Bhadohi",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 645,
    city_name: "Bijnor",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 646,
    city_name: "Budaun",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 647,
    city_name: "Bulandshahr",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 648,
    city_name: "Chandauli",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 649,
    city_name: "Chitrakoot",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 650,
    city_name: "Deoria",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 651,
    city_name: "Etah",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 652,
    city_name: "Etawah",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 653,
    city_name: "Faizabad",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 654,
    city_name: "Farrukhabad",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 655,
    city_name: "Fatehpur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 656,
    city_name: "Firozabad",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 657,
    city_name: "Gautam Buddha Nagar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 658,
    city_name: "Ghaziabad",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 659,
    city_name: "Ghazipur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 660,
    city_name: "Gonda",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 661,
    city_name: "Gorakhpur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 662,
    city_name: "Hamirpur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 663,
    city_name: "Hapur (Panchsheel Nagar)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 664,
    city_name: "Hardoi",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 665,
    city_name: "Hathras",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 666,
    city_name: "Jalaun",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 667,
    city_name: "Jaunpur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 224,
    city_name: "Jammu",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 225,
    city_name: "Kargil",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 226,
    city_name: "Kathua",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 227,
    city_name: "Kishtwar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 228,
    city_name: "Kulgam",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 229,
    city_name: "Kupwara",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 230,
    city_name: "Leh",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 231,
    city_name: "Poonch",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 232,
    city_name: "Pulwama",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 233,
    city_name: "Rajouri",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 234,
    city_name: "Ramban",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 235,
    city_name: "Reasi",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 236,
    city_name: "Samba",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 237,
    city_name: "Shopian",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 238,
    city_name: "Srinagar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 239,
    city_name: "Udhampu",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 240,
    city_name: "Bokaro",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 241,
    city_name: "Chatra",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 242,
    city_name: "Deoghar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 243,
    city_name: "Dhanbad",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 244,
    city_name: "Dumka",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 245,
    city_name: "East Singhbhum",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 246,
    city_name: "Garhwa",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 247,
    city_name: "Giridih",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 248,
    city_name: "Godda",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 249,
    city_name: "Gumla",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 250,
    city_name: "Hazaribag",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 251,
    city_name: "Jamtara",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 252,
    city_name: "Khunti",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 253,
    city_name: "Koderma",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 254,
    city_name: "Latehar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 255,
    city_name: "Lohardaga",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 256,
    city_name: "Pakur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 257,
    city_name: "Palamu",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 258,
    city_name: "Ramgarh",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 259,
    city_name: "Ranchi",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 260,
    city_name: "Sahibganj",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 261,
    city_name: "Seraikela-Kharsawan",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 262,
    city_name: "Simdega",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 263,
    city_name: "West Singhbhu",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 264,
    city_name: "Bagalkot",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 265,
    city_name: "Ballari (Bellary)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 266,
    city_name: "Belagavi (Belgaum)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 267,
    city_name: "Bengaluru (Bangalore) Rural",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 268,
    city_name: "Bengaluru (Bangalore) Urban",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 269,
    city_name: "Bidar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 270,
    city_name: "Chamarajanagar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 271,
    city_name: "Chikballapur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 272,
    city_name: "Chikkamagaluru (Chikmagalur)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 273,
    city_name: "Chitradurga",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 274,
    city_name: "Dakshina Kannada",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 275,
    city_name: "Davangere",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 276,
    city_name: "Dharwad",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 277,
    city_name: "Gadag",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 278,
    city_name: "Hassan",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 279,
    city_name: "Haveri",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 280,
    city_name: "Kalaburagi (Gulbarga)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 281,
    city_name: "Kodagu",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 282,
    city_name: "Kolar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 283,
    city_name: "Koppal",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 284,
    city_name: "Mandya",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 285,
    city_name: "Mysuru (Mysore)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 286,
    city_name: "Raichur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 287,
    city_name: "Ramanagara",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 288,
    city_name: "Shivamogga (Shimoga)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 289,
    city_name: "Tumakuru (Tumkur)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 290,
    city_name: "Udupi",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 291,
    city_name: "Uttara Kannada (Karwar)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 292,
    city_name: "Vijayapura (Bijapur)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 293,
    city_name: "Yadgi",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 294,
    city_name: "Alappuzha",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 295,
    city_name: "Ernakulam",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 296,
    city_name: "Idukki",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 297,
    city_name: "Kannur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 298,
    city_name: "Kasaragod",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 299,
    city_name: "Kollam",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 300,
    city_name: "Kottayam",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 301,
    city_name: "Kozhikode",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 302,
    city_name: "Malappuram",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 303,
    city_name: "Palakkad",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 304,
    city_name: "Pathanamthitta",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 305,
    city_name: "Thiruvananthapuram",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 306,
    city_name: "Thrissur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 307,
    city_name: "Wayana",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 308,
    city_name: "Agatti",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 309,
    city_name: "Amini",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 310,
    city_name: "Androth",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 311,
    city_name: "Bithra",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 312,
    city_name: "Chethlath",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 313,
    city_name: "Kavaratti",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 314,
    city_name: "Kadmath",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 315,
    city_name: "Kalpeni",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 316,
    city_name: "Kilthan",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 317,
    city_name: "Minico",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 318,
    city_name: "Agar Malwa",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 319,
    city_name: "Alirajpur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 320,
    city_name: "Anuppur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 321,
    city_name: "Ashoknagar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 322,
    city_name: "Balaghat",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 323,
    city_name: "Barwani",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 324,
    city_name: "Betul",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 325,
    city_name: "Bhind",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 326,
    city_name: "Bhopal",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 327,
    city_name: "Burhanpur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 328,
    city_name: "Chhatarpur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 329,
    city_name: "Chhindwara",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 330,
    city_name: "Damoh",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 331,
    city_name: "Datia",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 332,
    city_name: "Dewas",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 333,
    city_name: "Dhar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 334,
    city_name: "Dindori",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 335,
    city_name: "Guna",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 336,
    city_name: "Gwalior",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 337,
    city_name: "Harda",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 338,
    city_name: "Hoshangabad",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 339,
    city_name: "Indore",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 340,
    city_name: "Jabalpur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 341,
    city_name: "Jhabua",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 342,
    city_name: "Katni",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 343,
    city_name: "Khandwa",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 344,
    city_name: "Khargone",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 345,
    city_name: "Mandla",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 346,
    city_name: "Mandsaur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 347,
    city_name: "Morena",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 348,
    city_name: "Narsinghpur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 349,
    city_name: "Neemuch",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 350,
    city_name: "Panna",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 351,
    city_name: "Raisen",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 352,
    city_name: "Rajgarh",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 353,
    city_name: "Ratlam",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 354,
    city_name: "Rewa",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 355,
    city_name: "Sagar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 356,
    city_name: "Satna",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 357,
    city_name: "Sehore",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 358,
    city_name: "Seoni",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 359,
    city_name: "Shahdol",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 360,
    city_name: "Shajapur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 361,
    city_name: "Sheopur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 362,
    city_name: "Shivpuri",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 363,
    city_name: "Sidhi",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 364,
    city_name: "Singrauli",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 365,
    city_name: "Tikamgarh",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 366,
    city_name: "Ujjain",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 367,
    city_name: "Umaria",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 368,
    city_name: "Vidish",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 369,
    city_name: "Ahmednagar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 370,
    city_name: "Akola",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 371,
    city_name: "Amravati",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 372,
    city_name: "Aurangabad",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 373,
    city_name: "Beed",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 374,
    city_name: "Bhandara",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 375,
    city_name: "Buldhana",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 376,
    city_name: "Chandrapur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 377,
    city_name: "Dhule",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 378,
    city_name: "Gadchiroli",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 379,
    city_name: "Gondia",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 380,
    city_name: "Hingoli",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 381,
    city_name: "Jalgaon",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 382,
    city_name: "Jalna",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 383,
    city_name: "Kolhapur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 384,
    city_name: "Latur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 385,
    city_name: "Mumbai City",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 386,
    city_name: "Mumbai Suburban",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 387,
    city_name: "Nagpur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 388,
    city_name: "Nanded",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 389,
    city_name: "Nandurbar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 390,
    city_name: "Nashik",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 391,
    city_name: "Osmanabad",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 392,
    city_name: "Palghar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 393,
    city_name: "Parbhani",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 394,
    city_name: "Pune",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 395,
    city_name: "Raigad",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 396,
    city_name: "Ratnagiri",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 397,
    city_name: "Sangli",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 398,
    city_name: "Satara",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 399,
    city_name: "Sindhudurg",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 400,
    city_name: "Solapur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 401,
    city_name: "Thane",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 402,
    city_name: "Wardha",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 403,
    city_name: "Washim",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 404,
    city_name: "Yavatma",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 405,
    city_name: "Bishnupur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 406,
    city_name: "Chandel",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 407,
    city_name: "Churachandpur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 408,
    city_name: "Imphal East",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 409,
    city_name: "Imphal West",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 410,
    city_name: "Jiribam",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 411,
    city_name: "Kakching",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 412,
    city_name: "Kamjong",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 413,
    city_name: "Kangpokpi",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 414,
    city_name: "Noney",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 415,
    city_name: "Pherzawl",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 416,
    city_name: "Senapati",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 417,
    city_name: "Tamenglong",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 418,
    city_name: "Tengnoupal",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 419,
    city_name: "Thoubal",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 420,
    city_name: "Ukhru",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 421,
    city_name: "East Garo Hills",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 422,
    city_name: "East Jaintia Hills",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 423,
    city_name: "East Khasi Hills",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 424,
    city_name: "North Garo Hills",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 425,
    city_name: "Ri Bhoi",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 426,
    city_name: "South Garo Hills",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 427,
    city_name: "South West Garo Hills",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 428,
    city_name: "South West Khasi Hills",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 429,
    city_name: "West Garo Hills",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 430,
    city_name: "West Jaintia Hills",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 431,
    city_name: "West Khasi Hill",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 432,
    city_name: "Aizawl",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 433,
    city_name: "Champhai",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 434,
    city_name: "Kolasib",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 435,
    city_name: "Lawngtlai",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 436,
    city_name: "Lunglei",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 437,
    city_name: "Mamit",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 438,
    city_name: "Saiha",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 439,
    city_name: "Serchhi",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 440,
    city_name: "Dimapur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 441,
    city_name: "Kiphire",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 442,
    city_name: "Kohima",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 443,
    city_name: "Longleng",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 444,
    city_name: "Mokokchung",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 445,
    city_name: "Mon",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 2,
    city_name: "Anantapur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 3,
    city_name: "Chittoor",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 4,
    city_name: "East Godavari",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 5,
    city_name: "Guntur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 6,
    city_name: "Krishna",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 7,
    city_name: "Kurnool",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 8,
    city_name: "Nellore",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 9,
    city_name: "Prakasam",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 10,
    city_name: "Srikakulam",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 11,
    city_name: "Visakhapatnam",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 12,
    city_name: "Vizianagaram",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 13,
    city_name: "West Godavari",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 14,
    city_name: "YSR Kadap",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 15,
    city_name: "Tawang",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 16,
    city_name: "West Kameng",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 17,
    city_name: "East Kameng",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 18,
    city_name: "Papum Pare",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 19,
    city_name: "Kurung Kumey",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 20,
    city_name: "Kra Daadi",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 21,
    city_name: "Lower Subansiri",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 22,
    city_name: "Upper Subansiri",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 23,
    city_name: "West Siang",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 24,
    city_name: "East Siang",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 25,
    city_name: "Siang",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 26,
    city_name: "Upper Siang",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 27,
    city_name: "Lower Siang",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 28,
    city_name: "Lower Dibang Valley",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 29,
    city_name: "Dibang Valley",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 30,
    city_name: "Anjaw",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 31,
    city_name: "Lohit",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 32,
    city_name: "Namsai",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 33,
    city_name: "Changlang",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 34,
    city_name: "Tirap",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 35,
    city_name: "Longdin",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 36,
    city_name: "Baksa",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 37,
    city_name: "Barpeta",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 38,
    city_name: "Biswanath",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 39,
    city_name: "Bongaigaon",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 40,
    city_name: "Cachar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 41,
    city_name: "Charaideo",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 42,
    city_name: "Chirang",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 43,
    city_name: "Darrang",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 44,
    city_name: "Dhemaji",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 45,
    city_name: "Dhubri",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 46,
    city_name: "Dibrugarh",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 47,
    city_name: "Goalpara",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 48,
    city_name: "Golaghat",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 49,
    city_name: "Hailakandi",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 50,
    city_name: "Hojai",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 51,
    city_name: "Jorhat",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 52,
    city_name: "Kamrup Metropolitan",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 53,
    city_name: "Kamrup",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 54,
    city_name: "Karbi Anglong",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 55,
    city_name: "Karimganj",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 56,
    city_name: "Kokrajhar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 57,
    city_name: "Lakhimpur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 58,
    city_name: "Majuli",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 59,
    city_name: "Morigaon",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 60,
    city_name: "Nagaon",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 61,
    city_name: "Nalbari",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 62,
    city_name: "Dima Hasao",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 63,
    city_name: "Sivasagar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 64,
    city_name: "Sonitpur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 65,
    city_name: "South Salmara-Mankachar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 66,
    city_name: "Tinsukia",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 67,
    city_name: "Udalguri",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 68,
    city_name: "West Karbi Anglon",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 69,
    city_name: "Araria",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 70,
    city_name: "Arwal",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 71,
    city_name: "Aurangabad",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 72,
    city_name: "Banka",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 73,
    city_name: "Begusarai",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 74,
    city_name: "Bhagalpur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 75,
    city_name: "Bhojpur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 76,
    city_name: "Buxar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 77,
    city_name: "Darbhanga",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 78,
    city_name: "East Champaran (Motihari)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 79,
    city_name: "Gaya",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 80,
    city_name: "Gopalganj",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 81,
    city_name: "Jamui",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 82,
    city_name: "Jehanabad",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 83,
    city_name: "Kaimur (Bhabua)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 84,
    city_name: "Katihar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 85,
    city_name: "Khagaria",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 86,
    city_name: "Kishanganj",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 87,
    city_name: "Lakhisarai",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 88,
    city_name: "Madhepura",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 89,
    city_name: "Madhubani",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 90,
    city_name: "Munger (Monghyr)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 91,
    city_name: "Muzaffarpur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 92,
    city_name: "Nalanda",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 93,
    city_name: "Nawada",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 94,
    city_name: "Patna",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 95,
    city_name: "Purnia (Purnea)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 96,
    city_name: "Rohtas",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 97,
    city_name: "Saharsa",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 98,
    city_name: "Samastipur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 99,
    city_name: "Saran",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 100,
    city_name: "Sheikhpura",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 101,
    city_name: "Sheohar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 102,
    city_name: "Sitamarhi",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 103,
    city_name: "Siwan",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 104,
    city_name: "Supaul",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 105,
    city_name: "Vaishali",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 106,
    city_name: "West Champara",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 107,
    city_name: "Chandigar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 108,
    city_name: "Balod",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 109,
    city_name: "Baloda Bazar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 110,
    city_name: "Balrampur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 111,
    city_name: "Bastar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 112,
    city_name: "Bemetara",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 113,
    city_name: "Bijapur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 114,
    city_name: "Bilaspur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 115,
    city_name: "Dantewada (South Bastar)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 116,
    city_name: "Dhamtari",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 117,
    city_name: "Durg",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 118,
    city_name: "Gariyaband",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 119,
    city_name: "Janjgir-Champa",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 120,
    city_name: "Jashpur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 121,
    city_name: "Kabirdham (Kawardha)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 122,
    city_name: "Kanker (North Bastar)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 123,
    city_name: "Kondagaon",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 124,
    city_name: "Korba",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 125,
    city_name: "Korea (Koriya)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 126,
    city_name: "Mahasamund",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 127,
    city_name: "Mungeli",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 128,
    city_name: "Narayanpur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 129,
    city_name: "Raigarh",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 130,
    city_name: "Raipur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 131,
    city_name: "Rajnandgaon",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 132,
    city_name: "Sukma",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 133,
    city_name: "Surajpur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 134,
    city_name: "Surguj",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 135,
    city_name: "Dadra & Nagar Havel",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 136,
    city_name: "Daman",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 137,
    city_name: "Di",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 138,
    city_name: "Central Delhi",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 139,
    city_name: "East Delhi",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 140,
    city_name: "New Delhi",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 141,
    city_name: "North Delhi",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 142,
    city_name: "North East  Delhi",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 143,
    city_name: "North West  Delhi",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 144,
    city_name: "Shahdara",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 145,
    city_name: "South Delhi",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 146,
    city_name: "South East Delhi",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 147,
    city_name: "South West  Delhi",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 148,
    city_name: "West Delh",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 149,
    city_name: "North Goa",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 150,
    city_name: "South Go",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 151,
    city_name: "Ahmedabad",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 152,
    city_name: "Amreli",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 153,
    city_name: "Anand",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 154,
    city_name: "Aravalli",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 155,
    city_name: "Banaskantha (Palanpur)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 156,
    city_name: "Bharuch",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 157,
    city_name: "Bhavnagar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 158,
    city_name: "Botad",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 159,
    city_name: "Chhota Udepur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 160,
    city_name: "Dahod",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 161,
    city_name: "Dangs (Ahwa)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 162,
    city_name: "Devbhoomi Dwarka",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 163,
    city_name: "Gandhinagar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 164,
    city_name: "Gir Somnath",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 165,
    city_name: "Jamnagar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 166,
    city_name: "Junagadh",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 167,
    city_name: "Kachchh",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 168,
    city_name: "Kheda (Nadiad)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 169,
    city_name: "Mahisagar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 170,
    city_name: "Mehsana",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 171,
    city_name: "Morbi",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 172,
    city_name: "Narmada (Rajpipla)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 173,
    city_name: "Navsari",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 174,
    city_name: "Panchmahal (Godhra)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 175,
    city_name: "Patan",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 176,
    city_name: "Porbandar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 177,
    city_name: "Rajkot",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 178,
    city_name: "Sabarkantha (Himmatnagar)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 179,
    city_name: "Surat",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 180,
    city_name: "Surendranagar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 181,
    city_name: "Tapi (Vyara)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 182,
    city_name: "Vadodara",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 183,
    city_name: "Valsa",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 184,
    city_name: "Ambala",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 185,
    city_name: "Bhiwani",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 186,
    city_name: "Charkhi Dadri",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 187,
    city_name: "Faridabad",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 188,
    city_name: "Fatehabad",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 189,
    city_name: "Gurgaon",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 190,
    city_name: "Hisar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 191,
    city_name: "Jhajjar",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 192,
    city_name: "Jind",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 193,
    city_name: "Kaithal",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 194,
    city_name: "Karnal",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 195,
    city_name: "Kurukshetra",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 196,
    city_name: "Mahendragarh",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 197,
    city_name: "Mewat",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 198,
    city_name: "Palwal",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 199,
    city_name: "Panchkula",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 200,
    city_name: "Panipat",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 201,
    city_name: "Rewari",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 202,
    city_name: "Rohtak",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 203,
    city_name: "Sirsa",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 204,
    city_name: "Sonipat",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 205,
    city_name: "Yamunanaga",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 206,
    city_name: "Bilaspur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 207,
    city_name: "Chamba",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 208,
    city_name: "Hamirpur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 209,
    city_name: "Kangra",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 210,
    city_name: "Kinnaur",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 211,
    city_name: "Kullu",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 212,
    city_name: "Lahaul &amp; Spiti",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 213,
    city_name: "Mandi",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 214,
    city_name: "Shimla",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 215,
    city_name: "Sirmaur (Sirmour)",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 216,
    city_name: "Solan",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 217,
    city_name: "Un",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 218,
    city_name: "Anantnag",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 219,
    city_name: "Bandipore",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 220,
    city_name: "Baramulla",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 221,
    city_name: "Budgam",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 222,
    city_name: "Doda",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 223,
    city_name: "Ganderbal",
    updatedAt: "2024-05-21T03:31:43.827Z",
    createdAt: "2024-05-21T03:31:43.827Z",
  },
  {
    id: 1,
    city_name: "Bhubuneswar",
    updatedAt: "2024-05-19T13:31:24.058Z",
    createdAt: "2024-05-19T13:31:24.058Z",
  },
];
const CollectionPageV2Approved: FunctionComponent = () => {
  const fontSize = useCalculateFontSize();
  const params = useSearchParams();
  const [universities, setUniversities] = useState<any>([]);
  const [states, setStates] = useState<any>([]);
  const [cities, setCities] = useState<any>(x);
  const [subjects, setSubjects] = useState<any>([]);
  const [ratingBadges, setRatingBadges] = useState<any>([]);
  const [overallRating, setOverallRating] = useState<any>([]);
  const [sort, setSort] = useState<any>("");
  const [search, setSearch] = useState<any>("");
  const [certified, setCertified] = useState("");
  const [category, setCategory] = useState<any>([]);
  const [institution, setInstitution] = useState([
    "universities",
    "schools",
    "colleges",
  ]);
  const [filters, setFilters] = useState({
    state: [],
    city: [],
    "ratings.overall_rating": { equals: null },
    "ratings.subject_ratings.subject_rating": { equals: null },
    "ratings.category-ratings.category_rating": { equals: null },
    institution_name: "",
    type: {
      institution_type: "universities",
      subj_ratings: "university-subject-ratings",
      overall_rating: "university-overall-rating",
      category_rating: "university-category-rating",
    },
    elead: "yes",
  });
  const fetchDataWithFilter = useCallback((filter: any) => {
    fetchData(filter.type.institution_type, {
      page: 0,
      limit: 5,
      depth: 1,
      filter: {
        state: { in: filter.state.map((e: any) => e.id) },
        city: { in: filter.city.map((e: any) => e.id) },
        "ratings.overall_rating": filter["ratings.overall_rating"].equals
          ? filter["ratings.overall_rating"]
          : undefined,
        "ratings.subject_ratings.subject_rating": filter[
          "ratings.subject_ratings.subject_rating"
        ].equals
          ? filter["ratings.subject_ratings.subject_rating"]
          : undefined,
        "ratings.category-ratings.category_rating": filter[
          "ratings.category-ratings.category_rating"
        ].equals
          ? filter["ratings.category-ratings.category_rating"]
          : undefined,
        institution_name: {
          like: filter.institution_name || undefined, // Adjust the search term as needed
        },
        "ratings.e-lead": { equals: filter.elead },
      },
    })
      .then((data) => setUniversities(data.docs))
      .catch((error) => console.log("Error fetching data:", error));
  }, []);
  useEffect(() => {
    fetchData("states", { page: 0, limit: 1000, filter: {} }).then((data) =>
      setStates(data.docs)
    );
    // fetchData("cities", { page: 0, limit: 1000, filter: {} }).then((data) =>
    //   setCities(data.docs)
    // );
  }, []);

  useEffect(() => {
    fetchData(filters.type.subj_ratings, {
      page: 0,
      limit: 100,
      filter: {},
    }).then((data) => setSubjects(data.docs));
    fetchData(filters.type.overall_rating, {
      page: 0,
      limit: 100,
      filter: {},
    }).then((data) => setOverallRating(data.docs));
    fetchData(filters.type.category_rating, {
      page: 0,
      limit: 100,
      filter: {},
    }).then((data) => setCategory(data.docs));
  }, [filters.type.subj_ratings, filters.type.overall_rating]);

  useEffect(() => {
    fetchDataWithFilter(filters);
  }, [filters, fetchDataWithFilter]);

  const handleFilterChange = (type: string, value: any) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: value,
    }));
  };

  const handleSelectChange = (event: any) => {
    const value = event.target.value;

    const institutionDetails = {
      universities: {
        institution_type: "universities",
        subj_ratings: "university-subject-ratings",
        overall_rating: "university-overall-rating",
        category_rating: "university-category-rating",
      },
      colleges: {
        institution_type: "colleges",
        subj_ratings: "college-rating-badges",
        overall_rating: "college-overall-rating",
        category_rating: "collage-category-rating",
      },
      schools: {
        institution_type: "schools",
        subj_ratings: "school-subject-rating-badges",
        overall_rating: "school-overall-rating",
        category_rating: "school-category-rating",
      },
    };

    switch (value) {
      case "universities":
        handleFilterChange("type", institutionDetails.universities);
        break;
      case "colleges":
        handleFilterChange("type", institutionDetails.colleges);
        break;
      case "schools":
        handleFilterChange("type", institutionDetails.schools);
        break;
      default:
        break;
    }
  };

  //newly added
  // useEffect(() => {
  //   fetchData("universities", {
  //     page: 0,
  //     limit: 5,
  //     filter: filters,
  //   })
  //     .then((data) => {
  //       console.log(data, "fetched data");
  //       setUniverCityes(data.docs);
  //     })
  //     .catch((error) => {
  //       console.log("Error fetching data:", error);
  //     });
  //   fetchData("university-subject-ratings", {
  //     page: 0,
  //     limit: 5,
  //     filter: {},
  //   })
  //     .then((data) => {
  //       console.log(data, "fetched data");
  //       setSubjects(data.docs);
  //     })
  //     .catch((error) => {
  //       console.log("Error fetching data:", error);
  //     });
  //   fetchData("university-overall-rating", {
  //     page: 0,
  //     limit: 5,
  //     filter: {},
  //   })
  //     .then((data) => {
  //       console.log(data, "fetched data");
  //       setOverallRating(data.docs);
  //     })
  //     .catch((error) => {
  //       console.log("Error fetching data:", error);
  //     });
  //   fetchData("states", {
  //     page: 0,
  //     limit: 5,
  //     filter: {},
  //   })
  //     .then((data) => {
  //       console.log(data, "fetched data");
  //       setStates(data.docs);
  //     })
  //     .catch((error) => {
  //       console.log("Error fetching data:", error);
  //     });
  //   fetchData("cities", {
  //     page: 0,
  //     limit: 5,
  //     filter: {},
  //   })
  //     .then((data) => {
  //       console.log(data, "fetched data");
  //       setCities(data.docs);
  //     })
  //     .catch((error) => {
  //       console.log("Error fetching data:", error);
  //     });
  // }, []);
  //impliment search debounse

  const debouncedFetchData = useCallback(
    debounce((searchTerm: string) => {
      handleFilterChange("institution_name", searchTerm);
    }, 500),
    []
  );
  const handleChangeCheckBox = (key: string, e: any) => {
    handleFilterChange(key, e.target.checked ? "yes" : "no");
    console.log(key, e.target.checked);
  };
  useEffect(() => {
    console.log({
      univercityes: universities,
      states,
      cities,
      overallRating,
      subjects,
    });
  }, [universities, states, cities, overallRating, subjects]);
  useEffect(() => {
    if (params.get("city") && cities?.length) {
      // handleFilterChange("city", params.get("city"));
      console.log(cities);
    }
  }, [params.get("city")]);

  const handleClickSortByAlphabetically = () => {};

  const handleClickSortByRating = () => {};
  return (
    <div className="university-search flex flex-col">
      <div className="bg-papayawhip box-border md:h-32 border-[1px] border-solid border-orange-200 flex items-center justify-between w-full md:px-[150px] mdm:px-5 mdm:py-5">
        <b className="text-[36px] font-libre-baskerville  md:h-11 mdm:text-base">
          Top Rated Scools
        </b>
        <div className="  md:w-[257px] md:h-[22px] mdm:text-smi-6">
          <span>{`Home `}</span>
          <b className="text-orange-200">{`>`}</b>
          <span>{` Rated Institution `}</span>
        </div>
      </div>
      <section className="md:mt-[71px] md:mx-[150px] mdm:px-5 mb-5">
        <div className="grid grid-cols-12 gap-[50px] mdm:grid-cols-3 mdm:gap-10">
          <div className="col-span-2 border-[1px] border-whitesmoke-100 flex flex-col p-[16px] gap-[15px] mdm:hidden">
            <div className="text-[29px] font-semibold"> Filter</div>
            <div className="text-[16.13px]">Filter by location</div>

            <Autocomplete
              id="combo-box-demo"
              options={states}
              multiple
              size="small"
              value={filters.state}
              getOptionLabel={(e: any) => e.state_name}
              onChange={(e, i) => handleFilterChange("state", i)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Select State"
                  // startAdornment={
                  //   <InputAdornment position="start">
                  //     <LocationOnIcon
                  //       style={{
                  //         color: "#DC6A6A",
                  //       }}
                  //     />
                  //   </InputAdornment>
                  // }
                  // style={{
                  //   paddingRight: 10,
                  // }}
                  // endAdornment={
                  //   <InputAdornment position="end">
                  //     <IconButton
                  //       aria-label="toggle password visibility"
                  //       // onClick={handleClickShowPassword}
                  //       // onMouseDown={handleMouseDownPassword}
                  //       edge="end"
                  //     >
                  //       <KeyboardArrowDownIcon />
                  //     </IconButton>
                  //   </InputAdornment>
                  // }
                />
              )}
            />
            <Autocomplete
              id="combo-box-demo"
              options={cities.map((e: any) => ({ ...e, label: e.city_name }))}
              value={filters.city}
              multiple
              size="small"
              // getOptionLabel={(e: any) => e.city_name}
              onChange={(e, i) => handleFilterChange("city", i)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Select City"
                  // startAdornment={
                  //   <InputAdornment position="start">
                  //     <LocationOnIcon
                  //       style={{
                  //         color: "#DC6A6A",
                  //       }}
                  //     />
                  //   </InputAdornment>
                  // }
                  // style={{
                  //   paddingRight: 10,
                  // }}
                  // endAdornment={
                  //   <InputAdornment position="end">
                  //     <IconButton
                  //       aria-label="toggle password visibility"
                  //       // onClick={handleClickShowPassword}
                  //       // onMouseDown={handleMouseDownPassword}
                  //       edge="end"
                  //     >
                  //       <KeyboardArrowDownIcon />
                  //     </IconButton>
                  //   </InputAdornment>
                  // }
                />
              )}
            />

            <div className="bg-white box-border  border-[1px] border border-whitesmoke-100 my-[20px]" />
            <FormControl size="small" style={{ minWidth: 200 }}>
              <InputLabel>Filter by Institutions</InputLabel>
              <Select
                // multiple
                multiline
                size="small"
                value={filters.type.institution_type}
                placeholder="Filter by Institutions"
                label="Age"
                onChange={handleSelectChange}
              >
                <MenuItem value={"universities"}>University</MenuItem>
                <MenuItem value={"colleges"}>College</MenuItem>
                <MenuItem value={"schools"}>School</MenuItem>
                <MenuItem value={"autonomous-college"}>
                  Autonomous College
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl size="small" style={{ minWidth: 200 }}>
              <InputLabel>Filter by Ratings</InputLabel>
              <Select
                value={filters["ratings.overall_rating"].equals}
                multiline
                // multiple
                size="small"
                placeholder="Filter by Ratings"
                onChange={(e) =>
                  handleFilterChange("ratings.overall_rating", {
                    equals: e.target.value,
                  })
                }
              >
                {overallRating.map((e: any, i: number) => (
                  <MenuItem key={i} value={e.id}>
                    {e.badges_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl size="small" style={{ minWidth: 200 }}>
              <InputLabel>Filter by Subject</InputLabel>
              <Select
                size="small"
                value={filters["ratings.subject_ratings.subject_rating"].equals}
                placeholder="Filter by Subject"
                onChange={(e: any) =>
                  handleFilterChange("ratings.subject_ratings.subject_rating", {
                    equals: e.target.value,
                  })
                }
              >
                {subjects.map((e: any, i: number) => (
                  <MenuItem key={i} value={e.id}>
                    {e.badges_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e: any) => handleChangeCheckBox("elead", e)}
                  defaultChecked
                  sx={{
                    color: orange[800],
                    "&.Mui-checked": {
                      color: orange[600],
                    },
                  }}
                />
              }
              label="E-LEAD & Adv E-LEAD Certified"
            />
            <FormControlLabel
              control={
                <Checkbox
                  // onChange={(e: any) => handleChangeCheckBox("subject", e)}
                  defaultChecked
                  sx={{
                    color: orange[800],
                    "&.Mui-checked": {
                      color: orange[600],
                    },
                  }}
                />
              }
              label="Subject & Category"
            />
            <div className="bg-white box-border  border-[1px] border- border-whitesmoke-100 my-[20px]" />
          </div>

          <div className="col-span-3 md:col-span-10 flex flex-col w-full gap-10">
            <div className="bordder border-red-500 flex justify-between mdm:flex-col mdm:gap-2">
              <div className="flex gap-10 mdm:flex-col mdm:gap-2">
                <span
                  onClick={handleClickSortByAlphabetically}
                  className="cursor-pointer"
                >
                  <IconButton>
                    <SortIcon />
                  </IconButton>
                  Sort A to Z
                </span>
                <span
                  onClick={handleClickSortByRating}
                  className="cursor-pointer"
                >
                  <IconButton>
                    <SortIcon />
                  </IconButton>
                  Sort from Highest Rating to Lowest
                </span>
                <FormControl size="small" style={{ minWidth: 200 }}>
                  <InputLabel size="small">Sort By Category</InputLabel>
                  <Select
                    // value={age}
                    size="small"
                    placeholder="Sort By Category"
                    value={
                      filters["ratings.category-ratings.category_rating"].equals
                    }
                    onChange={(e: any) =>
                      handleFilterChange(
                        "ratings.category-ratings.category_rating",
                        {
                          equals: e.target.value,
                        }
                      )
                    }
                  >
                    {category.map((e: any, i: number) => (
                      <MenuItem key={i} value={e.id}>
                        {e.badges_name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <TextField
                size="small"
                placeholder="Search"
                onChange={(e) => debouncedFetchData(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>

            {universities?.map((university: any, i: number) => (
              <Card university={university} filters={filters} key={i} />
            ))}
          </div>
        </div>
      </section>
      <div
        style={{
          background: "linear-gradient(90deg, #272761 0%, #321489 100%)",
        }}
        className=" overflow-hidden border-red-500 bordcer-[2px] aspect-[1920/628] relative flex items-center justify-between px-5 md:px-20"
      >
        <div className="aspect-[600/311]  h-[50%] borcder border-red-500 flex flex-col justify-between mdm:h-[60%]">
          <div
            style={{
              fontSize: fontSize(48, 12, 1920, 400),
              fontWeight: 700,
              textAlign: "left",
            }}
            className="text-white font-semibold text-center font-libre-baskerville"
          >
            Register to QS i-gauge to compare Institutions
          </div>
          <div
            style={{
              fontSize: fontSize(20, 4, 1920, 400),
              fontFamily: "Libre Baskerville",
              fontWeight: 400,
              textAlign: "left",
            }}
            className="text-white font-semibold text-center font-red-hat-text "
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium...
          </div>
          <button>
            <img
              src="Button.svg"
              style={{
                height: fontSize(76, 15, 1920, 400),
              }}
            />
          </button>
        </div>
        <img src="qs.svg" className="h-full" />
        <img src="circle-left.png" className="absolute bottom-[-50%] left-0" />
      </div>
    </div>
  );
};

export default CollectionPageV2Approved;
