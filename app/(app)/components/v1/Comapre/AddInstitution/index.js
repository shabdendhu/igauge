"use client";
import React, { useEffect, useState } from "react";
import {
  Modal,
  Button,
  Select,
  MenuItem,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";
import { fetchData } from "@/app/(app)/services/institution";

const UniversitySelectionModal = ({
  open,
  onClose,
  onChange,
  selectedUniversities,
  setSelectedUniversities,
  institutionType,
}) => {
  const [institutions, setInstitutions] = useState([]);
  const [rows, setRows] = useState([{ key: 0, value: "" }]);

  const addRow = () => {
    setRows([...rows, { key: rows.length, value: "" }]);
  };

  const removeRow = (key) => {
    const updatedRows = rows.filter((row) => row.key !== key);
    setRows(updatedRows);
    handleOnChange(updatedRows);
  };

  const handleSelectChange = (key, value) => {
    const updatedRows = rows.map((row) =>
      row.key === key ? { ...row, value } : row
    );
    setRows(updatedRows);
    handleOnChange(updatedRows);
  };

  const handleOnChange = (updatedRows) => {
    const selectedIds = updatedRows
      .map((row) => row.value)
      .filter((value) => value !== "");
    onChange(selectedIds);
  };

  useEffect(() => {
    fetchData(selectedUniversities.type, {}).then((data) => {
      setInstitutions(data.docs);
    });
  }, [selectedUniversities.type]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          p: 4,
          bgcolor: "white",
          borderRadius: 2,
          boxShadow: 24,
          maxHeight: "80vh",
          overflow: "auto",
          maxWidth: 400,
          width: "100%",
        }}
      >
        <Typography
          id="modal-title"
          variant="h6"
          component="h2"
          gutterBottom
          color="orange"
        >
          Select {selectedUniversities.type}
        </Typography>
        <Select
          fullWidth
          displayEmpty
          value={selectedUniversities.type}
          size="small"
          onChange={(e) =>
            setSelectedUniversities((i) => ({ ...i, type: e.target.value }))
          }
          sx={{
            mr: 1,
            borderColor: "orange",
            color: "orange",
            marginBottom: 3,
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                bgcolor: "white",
                color: "orange",
              },
            },
          }}
        >
          <MenuItem value="" disabled>
            Select a institution type
          </MenuItem>
          <MenuItem value="universities">university</MenuItem>
          <MenuItem value="colleges">collages</MenuItem>
          <MenuItem value="schools">schools</MenuItem>
        </Select>
        {rows.map((row, index) => (
          <div key={row.key}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Select
                fullWidth
                displayEmpty
                size="small"
                value={row.value}
                onChange={(e) => handleSelectChange(row.key, e.target.value)}
                sx={{ mr: 1, borderColor: "orange", color: "orange" }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      bgcolor: "white",
                      color: "orange",
                    },
                  },
                }}
              >
                <MenuItem value="" disabled>
                  Select a {institutionType}
                </MenuItem>
                {institutions.map((institution) => (
                  <MenuItem
                    disabled={selectedUniversities.ids.includes(institution.id)}
                    key={institution.id}
                    value={institution.id}
                  >
                    {institution.institution_name}
                  </MenuItem>
                ))}
              </Select>
              {index === rows.length - 1 && (
                <IconButton sx={{ color: "orange" }} onClick={addRow}>
                  <AddIcon />
                </IconButton>
              )}
              <IconButton
                sx={{ color: "orange" }}
                onClick={() => removeRow(row.key)}
              >
                <RemoveIcon />
              </IconButton>
            </Box>
            {index < rows.length - 1 && (
              <Typography align="center" sx={{ mb: 2, color: "orange" }}>
                VS
              </Typography>
            )}
          </div>
        ))}
        <Box sx={{ textAlign: "right" }}>
          <Button
            onClick={onClose}
            size="small"
            variant="contained"
            sx={{ bgcolor: "orange", color: "white" }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default UniversitySelectionModal;
