/**
 * Custom hook for table functionality
 * Manages table data, selection state and sorting
 * Provides methods for table operations and data manipulation
 */

import { useState } from 'react';
import { useScanner } from '../context/ScannerContext';

export const useTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTracking, setSelectedTracking] = useState(null);
  const { tableData, newItems } = useScanner();

  const handleTrackingClick = (tracking) => {
    setSelectedTracking(tracking);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    selectedTracking,
    tableData,
    newItems,
    handleTrackingClick,
    handleCloseModal
  };
}; 