import * as types from '../types/types';

export const getUniversities = (params) => {        
    return  {
       type: types.GET_UNIVERSITIES,
       params
      }
  }
  
  export const createUniversity = (params) => {        
    return  {
       type: types.CREATE_UNIVERSITY,
       params
      }
  }
  
  export const updateUniversity = (params) => {        
    return  {
       type: types.UPDATE_UNIVERSITY,
       params
      }
  }     
  
  export const deleteUniversity = (params) => {        
    return  {
       type: types.DELETE_UNIVERSITY,
       params
      }
  }                                                                                                                                                     
                                                                                                                                                                                                                                              