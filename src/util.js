import truncate from "lodash/truncate";
import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'

export function excerpt(string) {
  return truncate(string, {    
    length: 400, // maximum 400 characters
    separator: /,?\.* +/, // separate by spaces, including preceding commas and periods
  });
}

